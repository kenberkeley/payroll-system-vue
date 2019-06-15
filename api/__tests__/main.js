/* global describe, beforeAll, it, expect */
import fs from 'fs'
import shortid from 'shortid'
import request from 'supertest'
import HttpStatus from 'http-status-codes'
import app from '../main'
import { DB_FILE } from '../db/'
import { ADMIN_USER } from '../config'
const getDbData = () => JSON.parse(fs.readFileSync(DB_FILE, 'utf8'))

describe('api tests', () => {
  let authHeader
  beforeAll(async function login () {
    const res = await request(app)
      .post('/login')
      .send(ADMIN_USER)
    expect(res.status).toBe(HttpStatus.OK)
    expect(typeof res.body.token).toBe('string')
    authHeader = { Authorization: `Bearer ${res.body.token}` }
  })

  it('Block all request without token (except /login)', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(HttpStatus.UNAUTHORIZED)
  })

  it('POST /login with invalid username and password', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'fake', password: 'test' })
    expect(res.status).toBe(HttpStatus.UNPROCESSABLE_ENTITY)
  })

  it('GET /whoami', async () => {
    const res = await request(app)
      .get('/whoami')
      .set(authHeader)
    expect(res.status).toBe(HttpStatus.OK)
    expect(res.body.username).toBe(ADMIN_USER.username)
  })

  it('POST /payslips', async () => {
    const reqGen = () => ({ employee: shortid.generate() + ' ' + shortid.generate() })

    const req1 = reqGen()
    const res1 = await request(app)
      .post('/payslips')
      .set(authHeader)
      .send(req1)
    expect(res1.status).toBe(HttpStatus.OK)
    expect(
      getDbData().payslips.find(rc => rc.id === res1.body.id).employee
    ).toBe(req1.employee)

    const req2 = reqGen()
    const res2 = await request(app)
      .post('/payslips')
      .set(authHeader)
      .send(req2)
    expect(
      getDbData().payslips.find(rc => rc.employee === req2.employee).id
    ).toBe(res2.body.id)
  })
})
