/* global it, expect */
import validate from '../validate/'

it('validate', () => {
  expect(
    validate({
      employee: 'John Smith',
      payDate: '30 June 2019',
      payFrequency: 'Monthly',
      annualIncome: '60050.00',
      grossIncome: '5004.00',
      incomeTax: '922.00',
      netIncome: '4082.00',
      super: '450.00',
      pay: '3632.00'
    })
  ).toBe(null)

  expect(typeof validate({})).toBe('string')
})
