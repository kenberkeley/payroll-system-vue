import jwt from 'jsonwebtoken'
import HttpStatus from 'http-status-codes'
import saltedPwdHash from '~/utils/saltedPwdHash'
import { JWT_SECRET } from '~/config'
import db from '~/db/'

/* req.body - { username, password } */
export function login (req, res) {
  const user = db.get('users').find({
    username: req.body.username,
    password: saltedPwdHash(req.body)
  }).value()

  if (!user) {
    res.throw('Incorrect username or password', HttpStatus.UNPROCESSABLE_ENTITY)
    return
  }
  res.json({
    token: jwt.sign({ username: user.username }, JWT_SECRET)
  })
}

/* req.headers.authorization */
export function getCurUser (req, res) {
  res.json({
    username: req.user.username
  })
}
