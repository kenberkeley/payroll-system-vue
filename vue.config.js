const globby = require('globby')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const { API_PORT } = require('./api/config/')

// https://cli.vuejs.org/config/#vue-config-js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: `http://localhost:${API_PORT}`,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  configureWebpack: {
    plugins: [
      // https://github.com/FullHuman/purgecss/tree/master/examples/with-vue
      new PurgecssPlugin({
        paths: globby.sync([
          './public/index.html',
          './src/**/*.vue',
          './src/**/*.js'
        ])
      })
    ]
  }
}
