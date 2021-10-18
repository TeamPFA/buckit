const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: "development",

  entry: "./src/components/App.jsx",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            // Run postcss actions
            loader: "postcss-loader",
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: () => [require("autoprefixer")()]
              },
            }
          },
          "sass-loader"
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },

  devServer: {
    static: path.join(__dirname, "public"),

    compress: true,

    port: 8080,

    hot: true,

    historyApiFallback: true,

    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  
  devtool: "eval",

};