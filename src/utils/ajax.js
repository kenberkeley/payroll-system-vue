import axios from 'axios'
import jwt from './jwt'
import captureErr from './captureErr'

/**
 * @param  {object} req - https://github.com/axios/axios#request-config
 * @return {Promise<any>}
 */
export default function ajax (req) {
  req.baseURL = '/api'
  if (jwt.get()) {
    req.headers = {
      authorization: `Bearer ${jwt.get()}`,
      ...req.headers
    }
  }
  return axios(req)
    /** {object} res - https://github.com/axios/axios#response-schema */
    .then(res => res.data)
    /** {object} err - https://github.com/axios/axios#handling-errors */
    .catch(err => {
      if (err.response) {
        const { code, message } = err.response.data
        if (code === 401 && message.includes('token')) {
          jwt.clear() // invalid token, etc
        }
        captureErr(`[${code}] ${message}`)
        throw err.response
      } else {
        captureErr('Network Error')
        throw err
      }
    })
}
