import crypto from 'crypto'

/**
 * Refers to https://ciphertrick.com/salt-hash-passwords-using-nodejs-crypto
 * @param  {object} options
 * @param  {string} options.username
 * @param  {string} options.password
 * @return {string}
 */
export default function ({ username, password }) {
  return crypto
    .createHmac('sha512', username)
    .update(password)
    .digest('hex')
}
