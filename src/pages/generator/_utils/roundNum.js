/**
 * @param  {number|string} val
 * @param  {number} [digits=2]
 * @return {string}
 * e.g.
 *   roundNum(123) => '123.00'
 *   roundNum('123.4567', 3) => '123.457'
 */
export default function (val, digits = 2) {
  return val
    ? (+val).toFixed(digits)
    : val
}
