import camelCase from 'lodash/camelCase'

/**
 * Refer to https://github.com/tc39/proposal-object-values-entries/issues/15
 * @param  {array}  entries
 * @return {object}
 */
export default function (entries) {
  return entries.reduce((obj, [k, v]) => {
    obj[camelCase(k)] = v
    return obj
  }, {})
}
