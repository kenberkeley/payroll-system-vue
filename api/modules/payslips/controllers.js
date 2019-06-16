import shortid from 'shortid'
import HttpStatus from 'http-status-codes'
import db from '~/api/db/'
import validate from './utils/validate/'

export function create (req, res) {
  const err = validate(req.body)
  if (err) {
    res.throw(err, HttpStatus.UNPROCESSABLE_ENTITY)
    return
  }

  const newPayslip = {
    ...req.body,
    id: shortid.generate()
  }

  db.get('payslips')
    .push(newPayslip)
    .write()

  res.json({
    id: newPayslip.id
  })
}
