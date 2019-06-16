/* global jest, localStorage, describe, it, expect */
import shortid from 'shortid'
import LS from '../localStorage'
import captureErr from '../captureErr'
jest.mock('../captureErr')

describe('@/utils/localStorage.js', () => {
  it('get', () => {
    const key = shortid.generate()
    LS.get(key)
    expect(localStorage.getItem).toHaveBeenCalledWith(key)
  })

  it('get throws', () => {
    const err = new Error(shortid.generate())
    JSON.parse = jest.fn().mockImplementationOnce(() => {
      throw err
    })
    expect(LS.get('key')).toBe(null)
    expect(captureErr).toHaveBeenCalledWith(err)
  })

  it('set', async () => {
    const key = shortid.generate()
    const val = shortid.generate()
    LS.set(key, val)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(val))
    expect(localStorage.__STORE__[key]).toBe(JSON.stringify(val))
  })

  it('set throws', async () => {
    const err = new Error(shortid.generate())
    JSON.stringify = jest.fn().mockImplementationOnce(() => {
      throw err
    })
    LS.set('key', 'val')
    expect(captureErr).toHaveBeenCalledWith(err)
  })

  it('rm', async () => {
    const key = shortid.generate()
    LS.rm(key)
    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
  })
})
