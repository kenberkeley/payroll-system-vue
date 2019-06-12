import express from 'express'
import bodyParser from 'body-parser'
import { API_PORT } from './config'
import '~/db/'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('*', (req, res) => {
  res.json({ ok: true })
})

app.listen(API_PORT, () => {
  console.info(`API server is running on http://localhost:${API_PORT}`)
})
