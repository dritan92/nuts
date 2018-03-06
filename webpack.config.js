var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry:{
    app:'./src/app.js'
  },
  output:{
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
          exclude: /node_modules/,
          loader: 'babel-loader',
          query:
            {
              "presets": ['@babel/preset-env','@babel/preset-react']
            }
      }
    ]
  },

}
