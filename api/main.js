import './db/'
import express from 'express'
import expressJwt from 'express-jwt'
import { JWT_SECRET, API_PORT } from './config'
import { resThrow, notFound, errHandler } from './middlewares/errHandlers'
import mountRouters from './modules/'

const app = express()
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
  app.listen(API_PORT, () => {
    console.info(`API server is running on http://localhost:${API_PORT}`)
  })
}
// TODO: http://expressjs.com/en/advanced/best-practice-security.html for production
