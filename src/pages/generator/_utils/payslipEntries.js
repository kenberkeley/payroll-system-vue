import dayjs from 'dayjs'
import calcTax from './calcTax'
import roundNum from './roundNum'

const PAY_FREQUENCY = {
  name: 'Monthly',
  value: 12,
  unit: 'M'
}

export default function ({ firstName, lastName, annualIncome, superRate } = this) {
  const grossIncome = Math.round(annualIncome / PAY_FREQUENCY.value)
  const incomeTax = Math.round(calcTax(annualIncome) / PAY_FREQUENCY.value)
  const netIncome = grossIncome - incomeTax
  const superannuation = Math.round(grossIncome * superRate / 100)
  // `super` is a reserved word in JS
  return [
    ['Employee', firstName + ' ' + lastName],
    ['Pay Date', dayjs().endOf(PAY_FREQUENCY.unit).format('D MMMM YYYY')],
    ['Pay Frequency', PAY_FREQUENCY.name],
    ['Annual Income', roundNum(annualIncome), '$'],
    ['Gross Income', roundNum(grossIncome), '$'],
    ['Income Tax', roundNum(incomeTax), '$'],
    ['Net Income', roundNum(netIncome), '$'],
    ['Super', roundNum(superannuation), '$'],
    ['Pay', roundNum(netIncome - superannuation), '$']
  ]
}
