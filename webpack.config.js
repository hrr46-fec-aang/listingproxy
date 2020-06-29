const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/public/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  }
};
