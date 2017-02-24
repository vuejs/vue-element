const babel = require('rollup-plugin-babel')
const cjs = require('rollup-plugin-commonjs')
const node = require('rollup-plugin-node-resolve')
const replace = require('rollup-plugin-replace')

module.exports = {
  entry: 'src/vue-custom-element.js',
  dest: 'dist/vue-custom-element.js',
  format: 'umd',
  moduleName: 'VueCustomElement',
  plugins: [replace({
    'process.env.NODE_ENV': '"development"'
  }), node(), cjs(), babel()]
}
