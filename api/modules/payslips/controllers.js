import shortid from 'shortid'
import db from '~/db/'

export function create (req, res) {
  const newPayslip = {
    ...req.body, // TODO: validation
    id: shortid.generate()
  }
  db.get('payslips').push(newPayslip).write()
  res.json({ id: newPayslip.id })
}
