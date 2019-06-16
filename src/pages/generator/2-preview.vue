<template>
  <div class="box">
    <headerr
      :title="'Pay Slip for ' + payslipEntries[0][1]"
      :icon="require('./_assets/user-pay.png')"
    />
    <preview-table
      :titles="['Item', 'Employee Details']"
      :rows="payslipEntries"
    />
    <button class="button is-primary" style="width: 8em" @click="handlePay">
      Pay
    </button>
  </div>
</template>
<script>
import { toast } from 'bulma-toast'
import { mapState, mapActions } from 'vuex'
import Headerr from './_comps/Header.vue'
import PreviewTable from './_comps/PreviewTable.vue'
import payslipEntries from './_utils/payslipEntries'
import objectify from './_utils/objectify'
import validate from './_mixins/validate'
import module from './_store'

export default {
  mixins: [validate],
  components: { Headerr, PreviewTable },
  metaInfo: {
    title: 'Preview Payslip'
  },
  created () {
    if (this.$v.$invalid) {
      /**
        Avoid direct entry, or the problematic scenario which:
          1. Successfully passed the form validation to reach this page
          2. Hit browser's back button, modify the form data, make it invalid
          3. Hit browser's forward button, still can reach this page (illegally)

        It's harmful to the user experience if using `router.replace` to reach this page,
        because the user might want to go back and correct typos or amounts.
       */
      this.$router.replace('/generator/capture')
    }
  },
  computed: {
    ...mapState(module.name, Object.keys(module.state)),
    payslipEntries
  },
  methods: {
    ...mapActions(module.name, ['savePayslip', 'resetAll']),
    handlePay () {
      this.savePayslip(objectify(this.payslipEntries)).then(() => {
        toast({
          type: 'is-success',
          message: 'Successfully saved payslip',
          duration: 5000
        })
        this.resetAll()
        this.$router.replace('/generator/capture')
      })
    }
  }
}
</script>
