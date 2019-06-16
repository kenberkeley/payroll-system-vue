/* global jest, describe, beforeAll, it, expect */
import shortid from 'shortid'
import jwt from '../jwt'
import LS from '../localStorage'
import { TOKEN } from '@/constants/LocalStorageKeys'

jest.mock('../localStorage')

describe('@/utils/jwt.js', () => {
  beforeAll(() => {
    expect(LS.get).toHaveBeenCalledWith(TOKEN)
  })

  it('get & update & clear', () => {
    const token = shortid.generate()
    jwt.update(token)
    expect(LS.set).toHaveBeenCalledWith(TOKEN, token)
    expect(jwt.get()).toBe(token)

    jwt.clear()
    expect(LS.rm).toHaveBeenCalledWith(TOKEN)
    expect(jwt.get()).toBe(null)
  })
})
