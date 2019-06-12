import express from 'express'
import { API_PORT } from './config'
import { resThrow, notFound, errHandler } from '~/middlewares/errHandlers'
import '~/db/'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(resThrow)
app.use('*', notFound)
app.use(errHandler)

app.listen(API_PORT, () => {
  console.info(`API server is running on http://localhost:${API_PORT}`)
})
// TODO: http://expressjs.com/en/advanced/best-practice-security.html for production
