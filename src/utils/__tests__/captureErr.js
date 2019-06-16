/* global jest, describe, beforeAll, afterAll, it, expect */
import shortid from 'shortid'
import * as bulmaToast from 'bulma-toast'
import captureErr from '../captureErr'

describe('@/utils/captureErr.js', () => {
  let origToast = bulmaToast.toast
  let spyConsoleErr
  beforeAll(() => {
    bulmaToast.toast = jest.fn()
    spyConsoleErr = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('err is a string', () => {
    const errMsg = shortid.generate()
    captureErr(errMsg)
    expect(bulmaToast.toast).toHaveBeenCalledWith(
      expect.objectContaining({ message: errMsg })
    )
    expect(spyConsoleErr).toHaveBeenCalledWith(errMsg)
  })

  it('err is an error', () => {
    const err = new Error(shortid.generate())
    captureErr(err)
    expect(bulmaToast.toast).toHaveBeenCalledWith(
      expect.objectContaining({ message: err.message })
    )
    expect(spyConsoleErr).toHaveBeenCalledWith(err)
  })

  afterAll(() => {
    bulmaToast.toast = origToast
    spyConsoleErr.mockRestore()
  })
})
