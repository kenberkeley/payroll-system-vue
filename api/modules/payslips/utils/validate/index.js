import validate from 'validate.js'
import constraints from './constraints'

/**
 * @param  {object} payload
 * @return {string|null}
 */
export default function (payload) {
  const errMsgs = validate(
    payload,
    constraints,
    { format: 'flat' }
  )
  return errMsgs
    ? errMsgs.join('; ')
    : null
}
