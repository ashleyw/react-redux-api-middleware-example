var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  contentBase: 'http://0.0.0.0:4001',
  publicPath: config.output.publicPath,
  hot: true,
  stats: {chunks: false},
  historyApiFallback: { index: '/' },
  compress: true
}).listen(4001, '0.0.0.0', function (err, result) {
  if (err) console.error(err)
  console.log('webpack-dev-server running on port 4001')
})

// Exit on end of STDIN
process.stdin.resume()
process.stdin.on('end', function () {
  process.exit(0)
})
