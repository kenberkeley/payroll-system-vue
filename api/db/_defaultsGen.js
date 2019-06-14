import { ADMIN_USER } from '~/api/config'
import saltedPwdHash from '~/api/utils/saltedPwdHash'

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
