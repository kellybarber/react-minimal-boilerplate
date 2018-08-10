const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { use: ['babel-loader'], test: /\.js$/, exclude: /node_modules/ }
    ]
  },
  resolve: { extensions: [ '*', '.js', 'css', 'scss' ] },
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/',
    port: 3001
  }
};