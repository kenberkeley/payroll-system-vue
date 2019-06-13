import auth from './auth/router'
import payslips from './payslips/router'

export default function mountRouters (app) {
  app.use(auth)
  app.use(payslips)
}
