/* global jest, beforeEach, describe, it, expect */
import axios from 'axios'
import ajax from '../ajax'
import jwt from '../jwt'

jest.mock('axios')
jest.mock('../captureErr')

describe('@/utils/ajax.js', () => {
  beforeEach(() => {
    jwt.clear()
  })

  it('Response 2XX', async () => {
    const data = { hello: 'world' }
    axios.mockImplementation(() => Promise.resolve({ data }))

    const req1 = { url: '/' }
    const resData = await ajax(req1)
    expect(resData).toEqual(data)
    expect(req1.headers).toBeUndefined()

    const token = 'xxxxxx'
    jwt.update(token)
    const req2 = { url: '/whoami' }
    await ajax(req2)
    expect(req2.headers.Authorization.includes(token)).toBeTruthy()
  })

  it('Response errors', async () => {
    const token = 'abcdefghijklmn'
    jwt.update(token)

    const err1 = { response: { data: { code: 404, message: 'NOT FOUND' } } }
    axios.mockImplementationOnce(() => Promise.reject(err1))
    try {
      await ajax({ url: '/' })
    } catch (err) {
      expect(err).toEqual(err1.response)
      expect(jwt.get()).toEqual(token)
    }

    const err2 = new Error('Network disconnected')
    axios.mockImplementationOnce(() => Promise.reject(err2))
    try {
      await ajax({ url: '/' })
    } catch (err) {
      expect(err).toEqual(err2)
      expect(jwt.get()).toEqual(token)
    }

    const err3 = { response: { data: { code: 401, message: 'invalid token' } } }
    axios.mockImplementationOnce(() => Promise.reject(err3))
    try {
      await ajax({ url: '/' })
    } catch (err) {
      expect(err).toEqual(err3.response)
      expect(jwt.get()).toBeNull()
    }
  })
})
