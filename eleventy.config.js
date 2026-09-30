import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { HtmlBasePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";

const SITE_URL = "https://christopherhorrocks.com";

export default function (eleventyConfig) {
  const md = markdownIt({ html: true, linkify: false, typographer: false }).use(markdownItFootnote);
  eleventyConfig.setLibrary("md", md);

  // Links are written from the site root. When served from a subfolder (the
  // candc3d.github.io preview, before the custom domain is set) the deploy
  // workflow passes that folder in PATH_PREFIX and every link is rewritten.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts", "src/img": "img", "src/css": "css", "src/CNAME": "CNAME" });

  const curation = (data) => data.curation;
  const bySlugDate = (a, b) => b.date - a.date;
  const slugOf = (item) => item.page.fileSlug;

  eleventyConfig.addCollection("pieces", (api) => api.getFilteredByGlob("src/essays/*.md").sort(bySlugDate));

  eleventyConfig.addFilter("inSeries", (items, series, cur) => {
    const list = cur[series] || [];
    return items.filter((i) => list.includes(slugOf(i)));
  });
  eleventyConfig.addFilter("featured", (items, cur) => items.filter((i) => cur.featured.includes(slugOf(i))));
  eleventyConfig.addFilter("seriesOf", (slug, cur) => (cur.interludes.includes(slug) ? "interludes" : cur.aids.includes(slug) ? "aids" : "essays"));
  eleventyConfig.addFilter("neighbours", (items, slug, cur) => {
    const series = cur.interludes.includes(slug) ? "interludes" : cur.aids.includes(slug) ? "aids" : "essays";
    const list = items.filter((i) => (cur[series] || []).includes(slugOf(i))).sort((a, b) => a.date - b.date);
    const i = list.findIndex((x) => slugOf(x) === slug);
    return { prev: i > 0 ? list[i - 1] : null, next: i >= 0 && i < list.length - 1 ? list[i + 1] : null };
  });

  const fmt = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  eleventyConfig.addFilter("longDate", (d) => fmt.format(new Date(d)));
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("year", (d) => new Date(d).getUTCFullYear());
  eleventyConfig.addFilter("absUrl", (p) => new URL(p, SITE_URL).href);
  eleventyConfig.addFilter("stripMd", (s) => String(s || "").replace(/[*_`]/g, ""));

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: { name: "pieces", limit: 0 },
    metadata: {
      language: "en",
      title: "Christopher Horrocks",
      subtitle: "Essays from the Virtual Intelligence series.",
      base: SITE_URL + "/",
      author: { name: "Christopher Horrocks" },
    },
  });

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
  };
}
