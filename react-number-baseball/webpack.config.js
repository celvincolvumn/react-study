const path = require("path");

module.exports = {
  name: "numberbaseball-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".jsx", ".css"],
  },

  // input
  entry: {
    app: ["./App", "./NumberBaseball", "./Try"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["react-hot-loader/babel"],
        },
      },
    ],
  },

  // output
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },
};
