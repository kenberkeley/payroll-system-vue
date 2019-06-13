import { ADMIN_USER } from '~/config'
import saltedPwdHash from '~/utils/saltedPwdHash'

export default function () {
  return {
    users: [{
      username: ADMIN_USER.username,
      password: saltedPwdHash(ADMIN_USER)
    }],
    payslips: [/* {
      employee
      payDate
      payFrequency
      annualIncome
      grossIncome
      incomeTax
      netIncome
      super
      pay
    } */]
  }
}
