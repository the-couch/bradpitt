var path = require("path");
var webpack = require("webpack");
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist" ),
        filename: "bradpitt.js",
    },
    watch: true,
    plugins: [
      // new webpack.optimize.DedupePlugin(),
      // new webpack.optimize.UglifyJsPlugin(),
      new CompressionPlugin({
          asset: 'bradpitt.gz',
          algorithm: 'gzip',
          threshold: 10240,
          minRatio: 0.8
      })
    ],
    module: {
        loaders: [
            {
                loader: "babel-loader",
                test: path.join(__dirname, "src"),
                query: {
                    presets: "es2015",
                },
            }
        ],
    },
    stats: {
        colors: true,
    },
    devtool: "source-map",
};
