const path = require("path");

module.exports = {
  name: "gugudan-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".jsx", ".css"],
  },

  // input
  entry: {
    app: ["./App", "./Gugudan"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"],
                },
              },
            ],
            "@babel/preset-react",
          ],
        },
      },
    ],
  },
  // output
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
