export default {
  employee: {
    presence: true
  },
  payDate: {
    presence: true
  },
  payFrequency: {
    presence: true
  },
  annualIncome: {
    presence: true,
    numericality: {
      onlyInteger: true,
      notLessThan: 0
    }
  },
  grossIncome: {
    presence: true,
    numericality: {
      notLessThan: 0
    }
  },
  incomeTax: {
    presence: true,
    numericality: {
      notLessThan: 0
    }
  },
  netIncome: {
    presence: true,
    numericality: {
      notLessThan: 0
    }
  },
  super: {
    presence: true,
    numericality: {
      notLessThan: 0
    }
  },
  pay: {
    presence: true,
    numericality: {
      notLessThan: 0
    }
  }
}
