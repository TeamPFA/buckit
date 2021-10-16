const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: 'development',

  entry: './src/components/App.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  devServer: {
    static: path.join(__dirname, 'public'),
    
    compress: true,

    port: 8080,

    hot: true,
    
    historyApiFallback: true,

    proxy: {
      '/api': 'http://localhost:3000'
    }
  },

  devtool: 'eval'
}