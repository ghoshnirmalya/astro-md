export default {
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  markdownOptions: {
    remarkPlugins: [
      "remark-code-titles",
      "remark-slug",
      "remark-external-links",
      "remark-toc",
    ],
    rehypePlugins: [
      ["rehype-autolink-headings"],
      [("rehype-toc", { headings: ["h2", "h3"] })],
      ["rehype-add-classes", { "h1,h2,h3": "title" }],
      ["rehype-plugin-image-native-lazy-loading"],
    ],
  },
};
