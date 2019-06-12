/**
 * @param  {string} msg
 * @param  {number} [code]
 * @return {Error}
 */
export default function (msg, code) {
  const err = new Error(msg)
  if (code) {
    err.statusCode = code
  }
  return err
}
