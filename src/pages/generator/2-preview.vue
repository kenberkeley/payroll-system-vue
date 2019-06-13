<template>
  <div class="box">
    <headerr
      title="Pay Slip for"
      :icon="require('./_assets/user-pay.png')"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Headerr from './_comps/Header.vue'
import validate from './_mixins/validate'
import module from './_store'

export default {
  mixins: [validate],
  components: { Headerr },
  metaInfo: {
    title: 'Preview Payslip'
  },
  created () {
    if (this.$v.$invalid) {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState(module.name, Object.keys(module.state))
  }
}
</script>
