module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { use: ['babel-loader'], test: /\.js$/, exclude: /node_modules/ }
    ]
  },
  resolve: { extensions: [ '*', '.js', 'css', 'scss' ] },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};