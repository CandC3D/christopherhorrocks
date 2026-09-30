# christopherhorrocks.com

The personal site of Christopher Horrocks: the Virtual Intelligence essays, hosted in full, with links to the companion sites. Substack stays the place of first publication. This site is the permanent archive.

The site is built with Eleventy from Markdown files and deployed to GitHub Pages every time a change reaches the `main` branch.

## Adding an essay after it is published on Substack

1. Find the essay's address on Substack. The last part of it, after `/p/`, is its slug. For `https://chorrocks.substack.com/p/virtual-intelligence-and-the-harms`, the slug is `virtual-intelligence-and-the-harms`.
2. Open `src/_data/curation.json`. Add the slug to the `essays` list, or to `interludes` if it belongs to the "In Search of" series. Add it to `featured` as well if it should appear on the homepage. Only pieces listed in this file are published here.
3. Run the importer for that slug:

   ```
   npm install
   npm run import -- virtual-intelligence-and-the-harms
   ```

   This fetches the published text, writes `src/essays/<slug>.md`, downloads its images into `src/img/<slug>/`, and links the podcast episode if one with a matching title exists.
4. Check it:

   ```
   npm run build
   npm run verify
   ```

   The verification compares the page against the Substack original word for word, including italics, bold, links, images and footnote markers. It writes its report to `import/verification.md`. Anything other than "All pieces match" needs a look before publishing.
5. Commit and push to `main`. The site rebuilds and deploys on its own in a minute or two.

If a podcast episode is published later than the essay, run step 3 again for the essay. It picks up the episode.

### Adding an essay by hand

Instead of the importer, you can drop a Markdown file into `src/essays/`. The file name becomes the address: `src/essays/my-essay.md` is served at `/essay/my-essay/`. It must start with this block, and its slug must also be listed in `curation.json`:

```
---
title: "The essay's title"
subtitle: "The subtitle"
date: 2026-10-01
substack: "https://chorrocks.substack.com/p/my-essay"
podcast: ""
image: ""
description: "One sentence for search results and social cards."
---
```

## Other content

- Homepage bio, frameworks and tools, talks, research and the Elsewhere links: `src/_data/home.json`.
- Podcast episode list: `src/_data/podcast.json`, rewritten by every import run.
- Colours and type: `src/css/site.css`. Fonts are self-hosted in `src/fonts/`; `scripts/fetch-fonts.sh` refreshes them.

## What the importer leaves out

Substack's own furniture is not prose and is not reproduced: subscribe boxes, share buttons, and the "Thanks for reading" captions that sit beside them. Buttons that link to the companion sites are kept. Embedded tweets and embedded post cards are rendered as a quotation or a plain link, since the site loads nothing from third parties.

## Local preview

```
npm install
npm run serve
```

Then open http://localhost:8080.
