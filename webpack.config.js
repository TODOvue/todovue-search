const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "tvsearch.js",
    library: "TvSearch",
    libraryTarget: "umd",
  },
};
