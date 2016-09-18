var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = [
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('css/app.css', {
    allChunks: true
  }),
  new HtmlWebpackPlugin({ template: 'src/index.html', inject: false })
]

module.exports = {
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js', '.jsx', '.sass']
  },
  devtool: 'hidden-source-map',
  entry: [
    './src/js/index.jsx',
    './src/css/app.sass'
  ],
  output: {
    path: path.join(__dirname, './build'),
    filename: 'js/index.js'
  },
  plugins: plugins,
  module: {
    loaders: [
      { test: /\.jsx?/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.sass?/, loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader'])},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=16384&name=images/[name]-[hash].[ext]' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "/src/css")]
  },
  postcss: function () {
    return [autoprefixer];
  }
}
