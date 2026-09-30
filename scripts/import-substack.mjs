// Import published posts from chorrocks.substack.com into src/essays/*.md.
//
//   node scripts/import-substack.mjs            # import every post not yet on disk
//   node scripts/import-substack.mjs <slug>     # import (or re-import) one post
//   node scripts/import-substack.mjs --all      # re-import everything
//
// Only pieces listed in src/_data/curation.json are imported. Source of record
// is the published Substack text, read from Substack's public post API. Prose is reproduced as-is. Substack chrome (subscribe widgets,
// share buttons and their captions) is not prose and is left out; everything
// else is kept. Images are downloaded into src/img/<slug>/.

import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";

const PUB = "https://chorrocks.substack.com";
const ROOT = path.resolve(new URL("..", import.meta.url).pathname);
const ESSAYS = path.join(ROOT, "src", "essays");
const IMG = path.join(ROOT, "src", "img");
const RAW = path.join(ROOT, "import", "raw");
const PODCAST_JSON = path.join(ROOT, "src", "_data", "podcast.json");

const args = process.argv.slice(2);
const reimportAll = args.includes("--all");
const only = args.filter((a) => !a.startsWith("--"));

async function getJSON(url) {
  const r = await fetch(url, { headers: { "user-agent": "christopherhorrocks.com importer" } });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
}

async function listArchive() {
  const all = [];
  for (let offset = 0; ; offset += 12) {
    const page = await getJSON(`${PUB}/api/v1/archive?sort=new&search=&offset=${offset}&limit=12`);
    if (!page.length) break;
    all.push(...page);
  }
  return all;
}

// ---------- inline conversion ----------

function escapeMd(text) {
  // Escape only what Markdown would otherwise interpret. Prose is left alone.
  return text
    .replace(/\\/g, "\\\\")
    .replace(/([*_`\[\]<>~])/g, "\\$1");
}
function escapeHtml(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function wrapMarks(inner, mark) {
  // Move surrounding whitespace outside the emphasis markers so they stay valid.
  const m = inner.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!m[2]) return inner;
  return `${m[1]}${mark}${m[2]}${mark}${m[3]}`;
}

function emphasis($, child, mark, tag) {
  // Markdown emphasis only opens and closes cleanly against letters and digits.
  // Where the emphasised run starts or ends on punctuation or a space next to a
  // word, fall back to the HTML tag so the text renders exactly as published.
  const inner = inlineMd($, child);
  const core = inner.trim();
  if (!core) return inner;
  const clean = /^[\p{L}\p{N}\\[(*_"“‘]/u.test(core) && /[\p{L}\p{N}.,;:!?)\]*_"”’…]$/u.test(core);
  // Neighbours matter too: a run ending in punctuation cannot close against a
  // following letter, and one starting with punctuation cannot open after one.
  const nextText = child.next && child.next.type === "text" ? child.next.data : (child.next ? $(child.next).text() : "");
  const prevText = child.prev && child.prev.type === "text" ? child.prev.data : (child.prev ? $(child.prev).text() : "");
  const endsPunct = /[^\p{L}\p{N}]$/u.test(core) && !/\s$/.test(inner);
  const startsPunct = /^[^\p{L}\p{N}]/u.test(core) && !/^\s/.test(inner);
  const badClose = endsPunct && /^[\p{L}\p{N}]/u.test(nextText);
  const badOpen = startsPunct && /[\p{L}\p{N}]$/u.test(prevText);
  if (clean && !badClose && !badOpen) return wrapMarks(inner, mark);
  return `<${tag}>${inlineHtml($, child)}</${tag}>`;
}

function inlineMd($, node) {
  let out = "";
  for (const child of node.childNodes || []) {
    if (child.type === "text") { out += escapeMd(child.data); continue; }
    if (child.type !== "tag") continue;
    const tag = child.name;
    const inner = () => inlineMd($, child);
    switch (tag) {
      case "em": case "i": out += emphasis($, child, "*", "em"); break;
      case "strong": case "b": out += emphasis($, child, "**", "strong"); break;
      case "a": {
        const href = child.attribs.href || "";
        const text = inner();
        out += text.trim() ? `[${text}](${href})` : text;
        break;
      }
      case "code": out += "`" + $(child).text().replace(/`/g, "\\`") + "`"; break;
      case "br": out += "  \n"; break;
      case "sup": out += `<sup>${inlineHtml($, child)}</sup>`; break;
      case "sub": out += `<sub>${inlineHtml($, child)}</sub>`; break;
      case "u": out += `<u>${inlineHtml($, child)}</u>`; break;
      case "s": case "del": case "strike": out += `~~${inner()}~~`; break;
      case "img": out += imageHtml($, child, null); break;
      case "button": case "svg": break;
      default: out += inner();
    }
  }
  return out;
}

function inlineHtml($, node) {
  let out = "";
  for (const child of node.childNodes || []) {
    if (child.type === "text") { out += escapeHtml(child.data); continue; }
    if (child.type !== "tag") continue;
    const tag = child.name;
    const inner = () => inlineHtml($, child);
    switch (tag) {
      case "em": case "i": out += `<em>${inner()}</em>`; break;
      case "strong": case "b": out += `<strong>${inner()}</strong>`; break;
      case "a": out += `<a href="${escapeHtml(child.attribs.href || "")}">${inner()}</a>`; break;
      case "code": out += `<code>${escapeHtml($(child).text())}</code>`; break;
      case "br": out += "<br>"; break;
      case "sup": case "sub": case "u": case "s": case "del": out += `<${tag}>${inner()}</${tag}>`; break;
      case "button": case "svg": break;
      default: out += inner();
    }
  }
  return out;
}

// ---------- images ----------

const imageQueue = [];
let currentSlug = "";
let dropped = [];

function originalSrc(img) {
  try {
    const a = JSON.parse(img.attribs["data-attrs"] || "{}");
    if (a.src) return { src: a.src, alt: a.alt || img.attribs.alt || "", width: a.width, height: a.height, title: a.title };
  } catch {}
  return { src: img.attribs.src || "", alt: img.attribs.alt || "", width: img.attribs.width, height: img.attribs.height };
}
function localImagePath(src) {
  const name = decodeURIComponent(src.split("/").pop().split("?")[0]);
  return `/img/${currentSlug}/${name}`;
}
function imageHtml($, img, captionHtml) {
  const o = originalSrc(img);
  if (!o.src) return "";
  const local = localImagePath(o.src);
  imageQueue.push({ src: o.src, local });
  const dims = o.width && o.height ? ` width="${o.width}" height="${o.height}"` : "";
  const im = `<img src="${local}" alt="${escapeHtml(o.alt)}"${dims} loading="lazy">`;
  if (captionHtml === null) return im;
  return `<figure>${im}${captionHtml ? `<figcaption>${captionHtml}</figcaption>` : ""}</figure>`;
}

// ---------- block conversion ----------

function attrsOf(el) {
  try { return JSON.parse(el.attribs["data-attrs"] || "{}"); } catch { return {}; }
}
function isChromeButton(a) {
  const u = a.url || "";
  return /\/subscribe\b/.test(u) || /action=share/.test(u) || /utm_content=share/.test(u) || /^Share( |$)/.test(a.text || "") || (a.text || "") === "Subscribe now";
}

function blocks($, node, depth = 0) {
  const out = [];
  const push = (s) => { if (s && s.trim()) out.push(s.replace(/\s+$/, "")); };
  for (const child of node.childNodes || []) {
    if (child.type === "text") { if (child.data.trim()) push(escapeMd(child.data.trim())); continue; }
    if (child.type !== "tag") continue;
    const el = $(child);
    const cls = (child.attribs.class || "").split(/\s+/);
    const has = (c) => cls.includes(c);
    const tag = child.name;

    if (has("subscription-widget-wrap-editor") || has("subscription-widget")) { dropped.push("subscribe widget"); continue; }
    if (has("captioned-button-wrap")) { out.push(...blocks($, child, depth)); continue; }
    if (has("preamble")) { dropped.push("button caption: " + el.text().trim().slice(0, 60)); continue; }
    if (has("image-link-expand")) continue;

    if (tag === "p") {
      if (has("button-wrapper")) {
        const a = attrsOf(child);
        if (isChromeButton(a)) { dropped.push(`button: ${a.text}`); continue; }
        push(`<p class="button"><a href="${escapeHtml(a.url || "")}">${escapeHtml(a.text || a.url || "")}</a></p>`);
        continue;
      }
      if (has("cta-caption")) { dropped.push("button caption: " + el.text().trim().slice(0, 60)); continue; }
      const text = inlineMd($, child);
      if (!text.trim()) continue;
      // A paragraph that begins like a list item or heading must not become one.
      push(text.replace(/^(\s*)(\d+)([.)])(\s)/, "$1$2\\$3$4").replace(/^(\s*)([-+#>])/, "$1\\$2"));
      continue;
    }
    if (/^h[1-6]$/.test(tag)) {
      const level = Math.min(Math.max(parseInt(tag[1], 10), 2), 4);
      push(`${"#".repeat(level)} ${inlineMd($, child).trim()}`);
      continue;
    }
    if (tag === "hr") { push("---"); continue; }
    if (tag === "blockquote") {
      push(blocks($, child, depth + 1).join("\n\n").split("\n").map((l) => `> ${l}`.replace(/\s+$/, "")).join("\n"));
      continue;
    }
    if (tag === "ul" || tag === "ol") {
      const start = parseInt(child.attribs.start || "1", 10);
      let i = start;
      const items = [];
      el.children("li").each((_, li) => {
        const marker = tag === "ol" ? `${i++}. ` : "- ";
        const inner = blocks($, li, depth + 1).join("\n\n");
        const pad = " ".repeat(marker.length);
        items.push(marker + inner.split("\n").map((l, k) => (k ? pad + l : l)).join("\n"));
      });
      push(items.join("\n"));
      continue;
    }
    if (tag === "pre") {
      const code = el.find("code").length ? el.find("code").text() : el.text();
      const lang = ((el.find("code").attr("class") || "").match(/language-(\S+)/) || [])[1] || "";
      push("```" + (lang === "plaintext" ? "" : lang) + "\n" + code.replace(/\n$/, "") + "\n```");
      continue;
    }
    if (tag === "figure" || has("captioned-image-container")) {
      const img = el.find("img").first();
      const cap = el.find("figcaption").first();
      if (img.length) push(imageHtml($, img[0], cap.length ? inlineHtml($, cap[0]) : ""));
      continue;
    }
    if (tag === "img") { push(imageHtml($, child, "")); continue; }
    if (has("pullquote")) {
      push(`<blockquote class="pullquote">${blocksHtml($, child)}</blockquote>`);
      continue;
    }
    if (has("callout-block")) {
      push(`<aside class="callout">${blocksHtml($, child)}</aside>`);
      continue;
    }
    if (has("highlighted_code_block")) { out.push(...blocks($, child, depth)); continue; }
    if (has("twitter-embed")) {
      const a = attrsOf(child);
      const when = a.date ? new Date(a.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }) : "";
      let q = "";
      if (a.quoted_tweet && a.quoted_tweet.full_text) {
        q = `<blockquote><p>${escapeHtml(a.quoted_tweet.full_text).replace(/\n+/g, "<br>")}</p><footer>${escapeHtml(a.quoted_tweet.name || "")} (@${escapeHtml(a.quoted_tweet.username || "")})</footer></blockquote>`;
      }
      push(`<blockquote class="tweet"><p>${escapeHtml(a.full_text || "").replace(/\n+/g, "<br>")}</p>${q}<footer><a href="${escapeHtml((a.url || "").replace(/\.$/, ""))}">${escapeHtml(a.name || "")} (@${escapeHtml(a.username || "")})${when ? ", " + when : ""}</a></footer></blockquote>`);
      continue;
    }
    if (has("digest-post-embed") || has("embedded-post-wrap")) {
      const a = attrsOf(child);
      const url = a.canonical_url || a.url || "";
      const pub = a.publication_name ? ` <span class="embed-pub">${escapeHtml(a.publication_name)}</span>` : "";
      push(`<p class="embed"><a href="${escapeHtml(url)}">${escapeHtml(a.title || url)}</a>${pub}</p>`);
      continue;
    }
    if (has("image-gallery-embed")) {
      const g = attrsOf(child).gallery || {};
      const imgs = (g.images || []).map((im) => {
        const local = localImagePath(im.src);
        imageQueue.push({ src: im.src, local });
        return `<img src="${local}" alt="${escapeHtml(g.alt || "")}" loading="lazy">`;
      }).join("");
      push(`<figure class="gallery">${imgs}${g.caption ? `<figcaption>${escapeHtml(g.caption)}</figcaption>` : ""}</figure>`);
      continue;
    }
    if (tag === "div" || tag === "section" || tag === "span" || tag === "li") {
      out.push(...blocks($, child, depth));
      continue;
    }
    if (tag === "button" || tag === "svg" || tag === "form" || tag === "input" || tag === "script" || tag === "style") continue;
    // Anything unrecognised: keep its text so nothing is silently lost, and say so.
    dropped.push(`UNHANDLED <${tag} class="${child.attribs.class || ""}">`);
    push(inlineMd($, child));
  }
  return out;
}
function blocksHtml($, node) {
  // Inner content of a block that is emitted as raw HTML.
  let out = "";
  for (const child of node.childNodes || []) {
    if (child.type === "text") { if (child.data.trim()) out += `<p>${escapeHtml(child.data.trim())}</p>`; continue; }
    if (child.type !== "tag") continue;
    const ccls = (child.attribs.class || "").split(/\s+/);
    if (child.name === "figure" || ccls.includes("captioned-image-container")) {
      const img = $(child).find("img").first();
      const cap = $(child).find("figcaption").first();
      if (img.length) out += imageHtml($, img[0], cap.length ? inlineHtml($, cap[0]) : "");
    } else if (child.name === "img") out += imageHtml($, child, "");
    else if (child.name === "p") out += `<p>${inlineHtml($, child)}</p>`;
    else if (/^h[1-6]$/.test(child.name)) out += `<p><strong>${inlineHtml($, child)}</strong></p>`;
    else if (child.name === "ul" || child.name === "ol") {
      out += `<${child.name}>` + $(child).children("li").map((_, li) => `<li>${inlineHtml($, li)}</li>`).get().join("") + `</${child.name}>`;
    } else out += blocksHtml($, child);
  }
  return out;
}

// ---------- per post ----------

function yaml(s) {
  if (s === null || s === undefined) return '""';
  return JSON.stringify(String(s));
}

async function download(src, local) {
  const dest = path.join(ROOT, "src", local);
  try { await fs.access(dest); return; } catch {}
  await fs.mkdir(path.dirname(dest), { recursive: true });
  let r = await fetch(src);
  if (!r.ok) {
    // Fall back to Substack's image proxy for the same original.
    r = await fetch(`https://substackcdn.com/image/fetch/f_auto,q_auto:best/${encodeURIComponent(src)}`);
  }
  if (!r.ok) throw new Error(`image ${r.status} ${src}`);
  await fs.writeFile(dest, Buffer.from(await r.arrayBuffer()));
}

function normTitle(t) {
  return t.toLowerCase()
    .replace(/[“”"’'`]/g, "")
    .replace(/\s*podcast\s*$/i, "")
    .replace(/[—–-]/g, " ")
    .replace(/\bpart\s+(1|i)\b/g, "part 1").replace(/\bpart\s+(2|ii)\b/g, "part 2").replace(/\bpart\s+(3|iii)\b/g, "part 3")
    .replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
}

async function importPost(meta, podcastByTitle) {
  const slug = meta.slug;
  currentSlug = slug;
  imageQueue.length = 0;
  dropped = [];
  const post = await getJSON(`${PUB}/api/v1/posts/${slug}`);
  await fs.mkdir(RAW, { recursive: true });
  await fs.writeFile(path.join(RAW, `${slug}.json`), JSON.stringify(post, null, 1));

  const $ = cheerio.load(`<div id="root">${post.body_html || ""}</div>`, null, false);
  const body = blocks($, $("#root")[0]).join("\n\n") + "\n";

  const date = post.post_date.slice(0, 10);
  const episode = podcastByTitle.get(normTitle(post.title));
  const podcastUrl = episode ? episode.url : (post.podcast_url ? post.canonical_url : "");
  const firstImage = imageQueue.length ? imageQueue[0].local : "";
  if (post.cover_image) {
    const m = post.cover_image.match(/(https%3A%2F%2F[^"]+)$/);
    if (m) {
      const src = decodeURIComponent(m[1]);
      const local = localImagePath(src);
      if (!imageQueue.find((q) => q.local === local)) imageQueue.push({ src, local });
    }
  }
  const cover = post.cover_image ? localImagePath(decodeURIComponent((post.cover_image.match(/(https%3A%2F%2F[^"]+)$/) || [,""])[1])) : firstImage;

  for (const q of imageQueue) await download(q.src, q.local);

  const fm = [
    "---",
    `title: ${yaml(post.title)}`,
    `subtitle: ${yaml(post.subtitle || "")}`,
    `date: ${date}`,
    `substack: ${yaml(post.canonical_url)}`,
    `podcast: ${yaml(podcastUrl)}`,
    `image: ${yaml(cover || "")}`,
    `description: ${yaml(post.search_engine_description || post.subtitle || "")}`,
    `substackWordcount: ${post.wordcount || 0}`,
    "---",
    "",
  ].join("\n");

  await fs.writeFile(path.join(ESSAYS, `${slug}.md`), fm + body);
  return { slug, title: post.title, date, images: imageQueue.length, dropped };
}

// ---------- main ----------

const archive = await listArchive();
const podcasts = archive.filter((p) => p.type === "podcast").map((p) => ({
  title: p.title, url: p.canonical_url, date: p.post_date.slice(0, 10), subtitle: p.subtitle || "", duration: p.podcast_duration || null, essayTitle: normTitle(p.title),
}));
const podcastByTitle = new Map(podcasts.map((p) => [p.essayTitle, p]));
const curation = JSON.parse(await fs.readFile(path.join(ROOT, "src", "_data", "curation.json"), "utf8"));
const allowed = new Set([...curation.essays, ...curation.interludes, ...curation.aids]);
const essays = archive.filter((p) => p.type !== "podcast" && p.audience === "everyone" && allowed.has(p.slug));
for (const s of allowed) if (!archive.find((p) => p.slug === s)) console.error(`listed in curation.json but not found on Substack: ${s}`);

// Link each episode to its essay slug where the titles match.
for (const p of podcasts) {
  const e = essays.find((x) => normTitle(x.title) === p.essayTitle);
  p.essaySlug = e ? e.slug : null;
}
await fs.mkdir(path.dirname(PODCAST_JSON), { recursive: true });
await fs.writeFile(PODCAST_JSON, JSON.stringify(podcasts.map(({ essayTitle, ...p }) => p), null, 2) + "\n");

await fs.mkdir(ESSAYS, { recursive: true });
const existing = new Set((await fs.readdir(ESSAYS)).filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3)));
const todo = essays.filter((p) => (only.length ? only.includes(p.slug) : reimportAll || !existing.has(p.slug)));
if (only.length) for (const s of only) if (!essays.find((p) => p.slug === s)) console.error(`not found on Substack: ${s}`);

const report = [];
for (const p of todo) {
  try {
    const r = await importPost(p, podcastByTitle);
    report.push(r);
    console.log(`ok   ${r.date}  ${r.slug}  (${r.images} images${r.dropped.length ? `, left out: ${r.dropped.length} Substack widgets` : ""})`);
    const odd = r.dropped.filter((d) => d.startsWith("UNHANDLED"));
    if (odd.length) console.log("     " + odd.join("\n     "));
  } catch (e) {
    console.error(`FAIL ${p.slug}: ${e.message}`);
  }
}
await fs.writeFile(path.join(ROOT, "import", "last-import.json"), JSON.stringify(report, null, 1));
console.log(`\n${report.length} imported, ${podcasts.length} podcast episodes listed in src/_data/podcast.json`);
