<template>
  <div class="box">
    <headerr
      :title="'Pay Slip for ' + previewData[0][1]"
      :icon="require('./_assets/user-pay.png')"
    />
    <table class="table is-fullwidth -preview-table">
      <thead class="has-text-weight-medium">
        <tr>
          <td>Item</td>
          <td>Employee Details</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in previewData" :key="idx">
          <td>{{ item[0] }}</td>
          <td>{{ item[1] }}</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
    <button class="button is-primary" style="width: 8em" @click="/* TODO */">
      Pay
    </button>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { mapState } from 'vuex'
import Headerr from './_comps/Header.vue'
import validate from './_mixins/validate'
import roundNum from './_utils/roundNum'
import calcTax from './_utils/calcTax'
import module from './_store'

export default {
  mixins: [validate],
  components: { Headerr },
  metaInfo: {
    title: 'Preview Payslip'
  },
  created () {
    if (this.$v.$invalid) {
      /**
        Avoid the scenario that:
          1. Successfully passed the form validation to reach this page
          2. Hit browser's back button, modify the form data, make it invalid
          3. Hit browser's forward button, still can reach this page, illegally

        It's harmful to the user experience if using `router.replace` to reach this page,
        because the user might want to go back and correct typos or amounts.
       */
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState(module.name, Object.keys(module.state)),
    previewData () {
      const PAY_FREQUENCY = { name: 'Monthly', value: 12, unit: 'M' }

      const grossIncome = Math.round(this.annualIncome / PAY_FREQUENCY.value)
      const incomeTax = Math.round(calcTax(this.annualIncome) / PAY_FREQUENCY.value)
      const netIncome = grossIncome - incomeTax
      const superannuation = Math.round(grossIncome * this.superRate / 100)
      // `super` is a reserved word in JS
      return [
        ['Employee', this.firstName + ' ' + this.lastName],
        ['Pay Date', dayjs().endOf(PAY_FREQUENCY.unit).format('D MMMM YYYY')],
        ['Pay Frequency', PAY_FREQUENCY.name],
        ['Annual Income', '$ ' + roundNum(this.annualIncome)],
        ['Gross Income', '$ ' + roundNum(grossIncome)],
        ['Income Tax', '$ ' + roundNum(incomeTax)],
        ['Net Income', '$ ' + roundNum(netIncome)],
        ['Super', '$ ' + roundNum(superannuation)],
        ['Pay', '$ ' + roundNum(netIncome - superannuation)]
      ]
    }
  }
}
</script>
<style lang="scss">
// refer to https://stackoverflow.com/a/40213845/5172890
.-preview-table {
  tr th:first-child,
  tr td:first-child {
    width: 18%;
    min-width: 8.5em;
  }
}
</style>
