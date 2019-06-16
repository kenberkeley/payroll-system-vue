/**
  Refer to:
    - https://michalzalecki.com/why-using-localStorage-directly-is-a-bad-idea
    - https://github.com/tsironis/lockr
 */
import captureErr from './captureErr'
const LS = window.localStorage

export default {
  get (key) {
    try {
      return JSON.parse(LS.getItem(key))
    } catch (e) {
      captureErr(e)
      return null
    }
  },
  set (key, val) {
    try {
      LS.setItem(key, JSON.stringify(val))
    } catch (e) {
      // exceeded the quota, etc
      captureErr(e)
    }
  },
  rm (key) {
    LS.removeItem(key)
  }
}
