module.exports = {
  entry: './src/js/app.js',
  output: {
    path: './build',
    filename: 'snow.js'       
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};