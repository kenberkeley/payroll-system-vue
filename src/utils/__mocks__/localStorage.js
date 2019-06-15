const storage = {}

export default {
  get (key) {
    return storage[key]
  },
  set (key, val) {
    storage[key] = val
  },
  rm (key) {
    delete storage[key]
  }
}
