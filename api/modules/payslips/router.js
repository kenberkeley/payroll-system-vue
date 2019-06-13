import express from 'express'
import { create } from './controllers'

const router = express.Router()

router.post('/payslips', create)

export default router
