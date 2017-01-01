var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      // {
      //   test: /\.js$/,
      //   loader: 'babel',
      //   query: {
      //     // 'plugins': [
      //     //   "babel-plugin-transform-es2015-template-literals",
      //     //   "babel-plugin-transform-es2015-literals",
      //     //   "babel-plugin-transform-es2015-function-name",
      //     //   "babel-plugin-transform-es2015-arrow-functions",
      //     //   "babel-plugin-transform-es2015-block-scoped-functions",
      //     //   "transform-custom-element-classes",
      //     //   "babel-plugin-transform-es2015-classes",
      //     //   "babel-plugin-transform-es2015-object-super",
      //     //   "babel-plugin-transform-es2015-shorthand-properties",
      //     //   "babel-plugin-transform-es2015-duplicate-keys",
      //     //   "babel-plugin-transform-es2015-computed-properties",
      //     //   "babel-plugin-transform-es2015-for-of",
      //     //   "babel-plugin-transform-es2015-sticky-regex",
      //     //   "babel-plugin-transform-es2015-unicode-regex",
      //     //   "babel-plugin-check-es2015-constants",
      //     //   "babel-plugin-transform-es2015-spread",
      //     //   "babel-plugin-transform-es2015-parameters",
      //     //   "babel-plugin-transform-es2015-destructuring",
      //     //   "babel-plugin-transform-es2015-block-scoping",
      //     //   "babel-plugin-transform-es2015-typeof-symbol",
      //     //   "babel-plugin-transform-es2015-modules-umd"
      //     //   // ["babel-plugin-transform-regenerator", { async: false, asyncGenerators: false }]
      //     // ],
      //     // // 'plugins': [
      //     // //   "babel-plugin-transform-es2015-template-literals",
      //     // //   "babel-plugin-transform-es2015-literals",
      //     // //   "babel-plugin-transform-es2015-function-name",
      //     // //   "babel-plugin-transform-es2015-arrow-functions",
      //     // //   "babel-plugin-transform-es2015-block-scoped-functions",
      //     // //   "transform-custom-element-classes",
      //     // //   "transform-es2015-classes",
      //     // //   "babel-plugin-transform-es2015-object-super",
      //     // //   "babel-plugin-transform-es2015-shorthand-properties",
      //     // //   "babel-plugin-transform-es2015-duplicate-keys",
      //     // //   "babel-plugin-transform-es2015-computed-properties",
      //     // //   "babel-plugin-check-es2015-constants",
      //     // //   "babel-plugin-transform-es2015-spread",
      //     // //   "babel-plugin-transform-es2015-parameters",
      //     // //   "babel-plugin-transform-es2015-destructuring",
      //     // //   "babel-plugin-transform-es2015-block-scoping",
      //     // //   "babel-plugin-transform-es2015-typeof-symbol"
      //     // // ],
      //     // babelrc: false
      //   },
      //   include: [
      //     path.join(projectRoot, 'src')
      //   ],
      //   exclude: [/node_modules/, /src\/demo/]
      // },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}
