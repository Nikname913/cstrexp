const path = require('path');

module.exports = {

    entry: './src/cstr.jsx',
    output: {
      path: path.resolve(__dirname, './'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      historyApiFallback: true,
      port: 8081,
      open: true
    },
    module: {
      rules: [{
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env", 
              "@babel/preset-react"
            ]
          }
      }]
    }

}