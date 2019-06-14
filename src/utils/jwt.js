import LS from './localStorage'
import { TOKEN } from '@/constants/LocalStorageKeys'

// Avoid frequent I/O by using a closure variable
let token = LS.get(TOKEN)

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
    LS.set(TOKEN, str)
    token = str
  },
  clear () {
    LS.rm(TOKEN)
    token = null
  }
}
