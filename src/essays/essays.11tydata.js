export default {
  layout: "essay.njk",
  eleventyComputed: {
    permalink: (data) => `/essay/${data.page.fileSlug}/`,
  },
};
