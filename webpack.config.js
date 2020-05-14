const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackConfig = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const resolve = (dir) => path.join(__dirname, dir);

console.log('*************' + process.env.NODE_ENV + '**************');

module.exports = {
  // devtool: 'source-map',
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: '[name].[hash:8].js',
    path: resolve('dist'),
    publicPath: '/',
  },
  devServer: {
    open: true,
    port: '3030',
    hot: false,
    host: '127.0.0.1',
    contentBase: resolve('./dist'),
    proxy: {
      '/aapi/*': {
        target: 'http://192.168.0.149:9527/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/aapi/': '',
        },
      },
    },
  },
  plugins: [
    new Webpack.DefinePlugin({
      '__ENV__': JSON.stringify(true),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackConfig({
      template: 'index.html',
      path: resolve('./index.html'),
    }),
  ],
};
