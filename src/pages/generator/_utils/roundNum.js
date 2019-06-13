/**
 * @param  {number|string} val
 * @param  {number} digit
 * @return {string}
 * e.g.
 *   roundNum(123, 2) => '123.00'
 *   roundNum('123.4567', 3) => '123.457'
 */
export default function (val, digit) {
  return val
    ? (+val).toFixed(digit)
    : val
}
