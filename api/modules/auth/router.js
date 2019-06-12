import express from 'express'
import { login, getCurUser } from './controllers'

const router = express.Router()

router.post('/login', login)
router.get('/whoami', getCurUser)

export default router
