import LS from './localStorage'
const LS_KEY = '__TOKEN__'

// Avoid frequent I/O by using a closure variable
let token = LS.get(LS_KEY)

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
