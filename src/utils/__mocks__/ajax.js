import { ADMIN_USER } from '~/api/config'
import shortid from 'shortid'

export default function (req) {
  return Promise.resolve({
    'GET /whoami': { username: ADMIN_USER.username },
    'POST /login': { token: shortid.generate() },
    'POST /payslips': { id: shortid.generate() }
  }[`${(req.method || 'get').toUpperCase()} ${req.url}`])
}
