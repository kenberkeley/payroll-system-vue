import { validationMixin } from 'vuelidate'
import { required, decimal, minValue, between } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    annualIncome: {
      required,
      decimal,
      minValue: minValue(0)
    },
    superRate: {
      required,
      decimal,
      between: between(0, 50)
    }
  }
}
