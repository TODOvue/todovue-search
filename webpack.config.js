module.exports = {
  output: {
    publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[hash:8].[ext]",
          outputPath: "img",
          publicPath: "../img",
        },
      },
    ],
  },
};
