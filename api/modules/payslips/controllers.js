import shortid from 'shortid'
import db from '~/api/db/'

export function create (req, res) {
  const newPayslip = {
    ...req.body, // TODO: validation
    id: shortid.generate()
  }

  db.get('payslips')
    .push(newPayslip) // TODO: check if has paid this month, etc
    .write()

  res.json({
    id: newPayslip.id
  })
}
