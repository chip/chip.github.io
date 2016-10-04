var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: true,
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          { test: /\.less$/, loader: "style!css!less" },
          { test: /\.css$/, loader: "style!css" },
          { test   : /\.(png|jpg)$/, loader : 'url-loader?limit=8192' },
          { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
          { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" },
			]
    }
};
