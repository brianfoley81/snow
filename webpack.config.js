module.exports = {
  entry: './app.js',
  output: {
    path: './build',
    filename: 'snow.js'       
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};