const path = require('path')
const out = path.resolve('./example/www')

module.exports = {
  entry: path.resolve('./example/src/index.js'),
  output: {
    path: out,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: out
  }
}
