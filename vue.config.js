const { API_PORT } = require('./api/config')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: `http://localhost:${API_PORT}`,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
