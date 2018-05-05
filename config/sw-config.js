module.exports = {
  cache: {
    cacheId: "workspace",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "workspace",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
