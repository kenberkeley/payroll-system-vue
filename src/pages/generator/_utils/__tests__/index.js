/* global describe, it, expect */
import calcTax from '../calcTax'
import objectify from '../objectify'
import payslipEntries from '../payslipEntries'
import roundNum from '../roundNum'

describe('utils', () => {
  it('calcTax', () => {
    expect(() => {
      calcTax()
    }).toThrow('Non-numeric argument: undefined')
    expect(() => {
      calcTax('hello')
    }).toThrow('Non-numeric argument: hello')
    expect(calcTax(0)).toBe(0)
    expect(calcTax(18200)).toBe(0)
    expect(calcTax(25000)).toBe(1292)
    expect(calcTax('37000.00')).toBe(3572)
    expect(calcTax(60050)).toBe(11063.25)
    expect(calcTax(87000)).toBe(19822)
    expect(calcTax(125000)).toBe(33882)
    expect(calcTax(180000)).toBe(54232)
    expect(calcTax('200000')).toBe(63232)
  })

  it('objectify', () => {
    expect(objectify([])).toEqual({})

    const obj1 = { a: 1, b: true, hello: 'world', foo: 'bar' }
    expect(objectify(Object.entries(obj1))).toEqual(obj1)

    const obj2 = { 'Foo Bar': 1, 'hello World': 2 }
    expect(objectify(Object.entries(obj2))).toEqual({
      fooBar: 1,
      helloWorld: 2
    })
  })

  it('payslipEntries', () => {
    const entries = payslipEntries.call({
      firstName: 'John',
      lastName: 'Smith',
      annualIncome: 60050,
      superRate: 9
    })
    const [payDate] = entries.splice(1, 1)
    expect(payDate[0]).toBe('Pay Date')
    expect(entries).toEqual([
      ['Employee', 'John Smith'],
      ['Pay Frequency', 'Monthly'],
      ['Annual Income', '60050.00', '$'],
      ['Gross Income', '5004.00', '$'],
      ['Income Tax', '922.00', '$'],
      ['Net Income', '4082.00', '$'],
      ['Super', '450.00', '$'],
      ['Pay', '3632.00', '$']
    ])
  })

  it('roundNum', () => {
    expect(roundNum()).toBeUndefined()
    expect(roundNum(null)).toBeNull()
    expect(roundNum(2)).toBe('2.00')
    expect(roundNum(100.12345)).toBe('100.12')
    expect(roundNum('200.789')).toBe('200.79')
    expect(roundNum(12.34567, 3)).toBe('12.346')
  })
})
