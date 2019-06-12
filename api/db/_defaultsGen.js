import saltedPwdHash from '~/utils/saltedPwdHash'

const DEFAULT_USER = {
  username: 'myob',
  password: 'CremorneVIC3121'
}

export default function () {
  return {
    users: [{
      username: DEFAULT_USER.username,
      password: saltedPwdHash(DEFAULT_USER)
    }],
    paySlips: [/* {
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
