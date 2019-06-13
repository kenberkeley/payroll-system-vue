/**
 * The latest rates are here: https://ato.gov.au/Rates/Individual-income-tax-rates
 * The following is obsolete
 *
 * @param  {number|string} annualIncome
 * @return {number}
 * @throws - if `annualIncome` is non-numeric
 */
export default function (annualIncome) {
  const val = +annualIncome
  switch (true) {
    case isNaN(val):
      throw new Error(`Non-numeric argument: ${annualIncome}`)
    case val <= 18200:
      return 0
    case val <= 37000:
      return (val - 18200) * 0.19
    case val <= 87000:
      return 3572 + (val - 37000) * 0.325
    case val <= 180000:
      return 19822 + (val - 87000) * 0.37
    case val > 180000:
      return 54232 + (val - 180000) * 0.45
  }
}
