import './db/'
import express from 'express'
import expressJwt from 'express-jwt'
import detectPort from 'detect-port'
import { JWT_SECRET, API_PORT } from './config'
import { resThrow, notFound, errHandler } from './middlewares/errHandlers'
import mountRouters from './modules/'

const app = express()
if (process.env.NODE_ENV === 'production') {
  app.use(require('helmet')())
}
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(resThrow)
app.use(expressJwt({ secret: JWT_SECRET }).unless({ path: ['/login'] }))

mountRouters(app)
app.use('*', notFound)

app.use(errHandler)

if (module.parent) {
  exports.default = module.exports = app // for testing
} else {
  detectPort(API_PORT).then(port => {
    app.listen(port, () => {
      console.info(`API server is running on http://localhost:${port}`)
    })
  })
}
