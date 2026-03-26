module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  eleventyConfig.addCollection("log", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/log/*.md")
      .sort((a, b) => {
        const dateA = a.data.updated || a.data.date;
        const dateB = b.data.updated || b.data.date;
        return dateB - dateA;
      });
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const d = new Date(dateObj);
    const months = [
      "jan", "feb", "mar", "apr", "may", "jun",
      "jul", "aug", "sep", "oct", "nov", "dec",
    ];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  });

  eleventyConfig.addFilter("year", (dateObj) => {
    return new Date(dateObj).getFullYear();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
