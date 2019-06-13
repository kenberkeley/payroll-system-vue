import { ADMIN_USER } from '~/config'
import saltedPwdHash from '~/utils/saltedPwdHash'

export default function () {
  return {
    users: [{
      username: ADMIN_USER.username,
      password: saltedPwdHash(ADMIN_USER)
    }],
    payslips: [/* {
      employee<string>
      payDate<string>
      payFrequency<string>
      annualIncome<number>
      grossIncome<number>
      incomeTax<number>
      netIncome<number>
      super<number>
      pay<number>
    } */]
  }
}
