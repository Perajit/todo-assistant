module.exports = {
  target: 'node',
  entry: {
    api: './src/index.js'
  },
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'firebase-admin': true,
    'firebase-functions': true
  }
}
