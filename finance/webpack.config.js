const path = require('path');
var ip = require('ip');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const theme = require('./theme.js');

let UglifyArray = [], sourceMap="cheap-module-eval-source-map";
const extractLeSS = new ExtractTextPlugin({
  filename: '[name].[hash].css',
  allChunks:true,
});

if(process.env.NODE_ENV === 'production'){
  UglifyArray.push(new UglifyJSPlugin({
    sourceMap: true,
    uglifyOptions:{
      compress:{
        drop_console: true,
        dead_code: true,
      }
    }
  }));
  sourceMap="none"
}

module.exports = {
  entry:'./src/index.js',
  mode:process.env.NODE_ENV,
  devtool: sourceMap,
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractLeSS.extract({
          use: ['css-loader', 'postcss-loader',{
            loader:'less-loader',
            options: {
             lessOptions: {
               modifyVars: theme,
               javascriptEnabled: true,
             },
           },
          }]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'image/[name].[ext]'
            },
        }],
      },
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
       title: '资金端系统',
       template:'./src/index.html'
    }),
    extractLeSS,
    new webpack.ProvidePlugin({
      'React':'react'
    }),
    ...UglifyArray
    // new webpack.HotModuleReplacementPlugin(),
  ],
  optimization:{
    splitChunks:{
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          enforce: true,
          priority: 10,
          name: 'vendor'
        },
        common: {
          chunks: "all",
          minChunks: 2,
          name: 'common',
          enforce: true,
          priority: 5
        }
      }
    }
  },
  resolve:{
    modules: [
      'node_modules',
      path.resolve(__dirname, './src'),
    ],
    alias:{
      'utils':path.resolve(__dirname, 'src/utils/'),
      'common':path.resolve(__dirname, 'src/common/'),
      'image':path.resolve(__dirname, 'src/image/'),
    },
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  devServer: {
    host:ip.address(),
    compress: true,
    port: 9000,
    proxy:{
      '/admin/ytFinance': {
        target:'https://fund05.bravowhale-uat.com/admin',//资金端
        pathRewrite: {"^/admin/ytFinance" : ""},
        changeOrigin: true,
      },
      '/admin/blockFinance': {
        target:'http://yuntuappapitest01.bravowhale-uat.com/admin/api/',//上链端
        pathRewrite: {"^/admin/blockFinance" : ""},
        changeOrigin: true,
      },
    }

  },
};
