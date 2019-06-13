import LS from './localStorage'
const LS_KEY = '__TOKEN__'

// Avoid frequent I/O by using a closure variable
let token = LS.get(LS_KEY)

/**
  Notice: the token in localStorage could be maliciously altered
  The only way to authenticate is making a request with it (e.g. GET /whoami)
  If the response status code is:
    - 200: valid
    - 401: invalid
 */
export default {
  get () {
    return token
  },
  update (str) {
    LS.set(LS_KEY, str)
    token = str
  },
  clear () {
    LS.rm(LS_KEY)
    token = null
  }
}
