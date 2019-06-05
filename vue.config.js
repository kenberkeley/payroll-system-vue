const { API_PORT } = require('./api/config')

module.exports = {
  devServer: {
    proxy: `http://localhost:${API_PORT}`
  }
}
