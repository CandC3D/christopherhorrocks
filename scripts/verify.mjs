// Compare each built essay page against its Substack original.
//
//   npm run build && npm run verify
//
// Reports, per piece: Substack's own word count, the word count of the Substack
// body text, the word count of the page on this site, footnote markers on each
// side, and any run of words present in one text but not the other. Substack
// chrome (subscribe and share widgets) is excluded from the Substack side, since
// the importer leaves it out on purpose. Writes import/verification.md.

import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";
import { diffArrays } from "diff";

const ROOT = path.resolve(new URL("..", import.meta.url).pathname);
const RAW = path.join(ROOT, "import", "raw");
const SITE = path.join(ROOT, "_site", "essay");

function substackText(html) {
  const $ = cheerio.load(`<div id="r">${html}</div>`, null, false);
  $(".subscription-widget-wrap-editor, .subscription-widget, .preamble, .image-link-expand, button, svg, form").remove();
  $("p.button-wrapper").each((_, el) => {
    let a = {};
    try { a = JSON.parse($(el).attr("data-attrs") || "{}"); } catch {}
    const u = a.url || "";
    if (/\/subscribe\b|action=share|utm_content=share/.test(u) || /^Share( |$)|^Subscribe now$/.test(a.text || "")) $(el).remove();
    else $(el).text(a.text || "");
  });
  // Embeds carry their text in data attributes; the importer renders it.
  $(".twitter-embed").each((_, el) => {
    const a = JSON.parse($(el).attr("data-attrs") || "{}");
    const when = a.date ? new Date(a.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }) : "";
    const q = a.quoted_tweet && a.quoted_tweet.full_text ? ` ${a.quoted_tweet.full_text} ${a.quoted_tweet.name || ""} (@${a.quoted_tweet.username || ""})` : "";
    $(el).replaceWith(`<p>${cheerio.load("").text()}${escape(a.full_text || "")}${escape(q)} ${escape(a.name || "")} (@${escape(a.username || "")})${when ? ", " + when : ""}</p>`);
  });
  $(".digest-post-embed, .embedded-post-wrap").each((_, el) => {
    const a = JSON.parse($(el).attr("data-attrs") || "{}");
    $(el).replaceWith(`<p>${escape(a.title || "")} ${escape(a.publication_name || "")}</p>`);
  });
  $(".image-gallery-embed").each((_, el) => {
    const g = (JSON.parse($(el).attr("data-attrs") || "{}").gallery) || {};
    $(el).replaceWith(`<p>${escape(g.caption || "")}</p>`);
  });
  $("p, h1, h2, h3, h4, h5, h6, li, figcaption, pre, blockquote, div").append(" ");
  $("br").replaceWith(" ");
  return $("#r").text();
}
function escape(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function siteText(html) {
  const $ = cheerio.load(html);
  const prose = $(".prose");
  prose.find("footer").append(" ");
  prose.find("p, h1, h2, h3, h4, h5, h6, li, figcaption, pre, blockquote, div, aside").append(" ");
  prose.find("br").replaceWith(" ");
  prose.find("hr").remove();
  return prose.text();
}

const norm = (t) => t.replace(/ /g, " ").replace(/[​‌‍﻿]/g, "");
const words = (t) => norm(t).split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w));
const footnotes = (t) => {
  const n = norm(t);
  const bracket = (n.match(/\[\d{1,3}\]/g) || []).length;
  return bracket;
};

function diffRuns(a, b) {
  // Myers diff on word arrays; returns runs present on one side only.
  const parts = diffArrays(a, b);
  const runs = [];
  let pos = 0;
  for (const p of parts) {
    if (p.added) runs.push({ side: "site only", text: p.value.join(" "), context: a.slice(Math.max(0, pos - 6), pos).join(" ") });
    else if (p.removed) { runs.push({ side: "Substack only", text: p.value.join(" "), context: a.slice(Math.max(0, pos - 6), pos).join(" ") }); pos += p.count; }
    else pos += p.count;
  }
  return runs;
}

function formatting(root, $) {
  const grab = (sel) => root.find(sel).map((_, el) => norm($(el).text()).replace(/\s+/g, " ").trim()).get().filter(Boolean).join(" | ").replace(/\s+/g, " ");
  return {
    em: words(grab("em, i")).join(" "),
    strong: words(grab("strong, b")).join(" "),
    links: root.find("a[href]").filter((_, el) => $(el).text().trim() !== "" || $(el).find("img").length > 0).map((_, el) => $(el).attr("href")).get().filter((h) => !/utm_content=share|action=share|\/subscribe\b/.test(h)).length,
    images: root.find("img").length,
    alts: root.find("img").map((_, el) => $(el).attr("alt") || "").get().filter(Boolean).join(" | "),
  };
}
function substackFormatting(html) {
  const $ = cheerio.load(`<div id="r">${html}</div>`, null, false);
  $(".subscription-widget-wrap-editor, .subscription-widget, .preamble, .image-link-expand, button, svg, form").remove();
  $("p.button-wrapper").each((_, el) => { let a = {}; try { a = JSON.parse($(el).attr("data-attrs") || "{}"); } catch {} ; const u = a.url || ""; if (/\/subscribe\b|action=share|utm_content=share/.test(u) || /^Share( |$)|^Subscribe now$/.test(a.text || "")) $(el).remove(); else $(el).replaceWith(`<a href="${a.url}">x</a>`); });
  $(".digest-post-embed, .embedded-post-wrap, .twitter-embed").each((_, el) => $(el).replaceWith(`<a href="x">x</a>`));
  $(".image-gallery-embed").each((_, el) => { const g = (JSON.parse($(el).attr("data-attrs") || "{}").gallery) || {}; $(el).replaceWith((g.images || []).map(() => `<img alt="${escape(g.alt || "")}">`).join("")); });
  $("img").each((_, el) => { let a = {}; try { a = JSON.parse($(el).attr("data-attrs") || "{}"); } catch {} ; if (a.alt) $(el).attr("alt", a.alt); });
  $("a.image-link").each((_, el) => { $(el).replaceWith($(el).find("img")); });
  $("a").filter((_, el) => $(el).text().trim() === "" && $(el).find("img").length === 0).each((_, el) => { $(el).replaceWith($(el).text()); });
  return formatting($("#r"), $);
}
function siteFormatting(html) {
  const $ = cheerio.load(html);
  const prose = $(".prose");
  prose.find("blockquote.tweet footer a").each((_, el) => { $(el).replaceWith($(el).text()); });
  prose.find("blockquote.tweet").each((_, el) => { $(el).append(`<a href="x">x</a>`); });
  return formatting(prose, $);
}

const files = (await fs.readdir(RAW)).filter((f) => f.endsWith(".json"));
const rows = [];
let problems = 0;
for (const f of files.sort()) {
  const post = JSON.parse(await fs.readFile(path.join(RAW, f), "utf8"));
  const slug = post.slug;
  let page;
  try { page = await fs.readFile(path.join(SITE, slug, "index.html"), "utf8"); }
  catch { rows.push({ slug, title: post.title, missing: true }); problems++; continue; }
  const a = words(substackText(post.body_html || ""));
  const b = words(siteText(page));
  const fa = footnotes(substackText(post.body_html || ""));
  const fb = footnotes(siteText(page));
  const runs = diffRuns(a, b);
  const sf = substackFormatting(post.body_html || ""), tf = siteFormatting(page);
  const fmt = [];
  for (const k of ["em", "strong", "alts"]) if (sf[k] !== tf[k]) {
    const d = diffRuns(sf[k].split(" | ").join(" ").split(" "), tf[k].split(" | ").join(" ").split(" "));
    fmt.push(`${k === "em" ? "Italic" : k === "strong" ? "Bold" : "Image alt"} text differs: ` + d.slice(0, 6).map((r) => `${r.side}: “${r.text}”`).join("; "));
  }
  for (const k of ["links", "images"]) if (sf[k] !== tf[k]) fmt.push(`${k === "links" ? "Link" : "Image"} count differs: Substack ${sf[k]}, site ${tf[k]}.`);
  const ok = runs.length === 0 && fa === fb && fmt.length === 0;
  if (!ok) problems++;
  rows.push({ slug, title: post.title, date: post.post_date.slice(0, 10), substackReported: post.wordcount, substackBody: a.length, site: b.length, fa, fb, runs, fmt, images: tf.images, links: tf.links, ok });
}

let md = `# Verification report\n\nGenerated ${new Date().toISOString().slice(0, 10)}. Compares each page on this site with the published Substack text.\n\n`;
md += `Substack's reported word count is its own figure and counts differently; the body count is this script's count of the same Substack text with subscribe and share widgets removed. A match means the two body texts are identical word for word, the italic and bold runs are identical, and link, image and image-alt text agree.\n\n`;
md += `| Piece | Date | Substack reported | Substack body | This site | Footnote markers, Substack | Footnote markers, site | Result |\n|---|---|---:|---:|---:|---:|---:|---|\n`;
for (const r of rows.sort((x, y) => (y.date || "").localeCompare(x.date || ""))) {
  if (r.missing) { md += `| ${r.title} | | | | | | | page missing |\n`; continue; }
  md += `| ${r.title} | ${r.date} | ${r.substackReported} | ${r.substackBody} | ${r.site} | ${r.fa} | ${r.fb} | ${r.ok ? "match" : "MISMATCH"} |\n`;
}
for (const r of rows.filter((r) => !r.ok && !r.missing)) {
  md += `\n## ${r.title}\n\n`;
  if (r.fa !== r.fb) md += `Footnote markers differ: Substack ${r.fa}, site ${r.fb}.\n\n`;
  for (const line of r.fmt) md += `- ${line}\n`;
  for (const run of r.runs.slice(0, 40)) md += `- **${run.side}** after “…${run.context}”: ${run.text}\n`;
  if (r.runs.length > 40) md += `- …and ${r.runs.length - 40} more\n`;
}
await fs.writeFile(path.join(ROOT, "import", "verification.md"), md);
console.log(md.split("\n## ")[0]);
console.log(problems ? `${problems} piece(s) need attention; details in import/verification.md` : "All pieces match.");
process.exitCode = problems ? 1 : 0;
