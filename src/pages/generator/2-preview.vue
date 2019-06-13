<template>
  <div class="box">
    <headerr
      title="Pay Slip for"
      :icon="require('./_assets/user-pay.png')"
    />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import Headerr from './_comps/Header.vue'
import module from './_store'

const { mapState } = createNamespacedHelpers(module.name)

export default {
  components: { Headerr },
  metaInfo: {
    title: 'Preview Payslip'
  },
  computed: {
    ...mapState(Object.keys(module.state))
  }
}
</script>
