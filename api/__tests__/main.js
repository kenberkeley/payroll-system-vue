/* global describe, beforeAll, it, expect */
import request from 'supertest'
import HttpStatus from 'http-status-codes'
import app from '../main'
import { ADMIN_USER } from '../config'
import { resetDbData, getDbData } from './_utils'

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
    resetDbData()
    expect(getDbData().payslips.length).toBe(0)

    const res1 = await request(app)
      .post('/payslips')
      .set(authHeader)
      .send({})
    expect(res1.status).toBe(HttpStatus.OK)
    expect(typeof res1.body.id).toBe('string')
    expect(getDbData().payslips.length).toBe(1)

    const res2 = await request(app)
      .post('/payslips')
      .set(authHeader)
      .send({ employee: 'John' })
    expect(getDbData().payslips[1]).toEqual({
      id: res2.body.id,
      employee: 'John'
    })
    resetDbData()
  })
})
