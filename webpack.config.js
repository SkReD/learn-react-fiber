const path = require("path");

module.exports = {
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        // flags to apply these rules, even if they are overridden (advanced option)
        loader: "babel-loader"
      },
      {
        test: /\.css?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};
