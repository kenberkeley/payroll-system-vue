<template>
  <div class="box">
    <headerr
      title="Pay Slip for"
      :icon="require('./_assets/user-pay.png')"
    />
  </div>
</template>
<script>
import Headerr from './_comps/Header.vue'

export default {
  components: { Headerr },
  metaInfo: {
    title: 'Preview Payslip'
  }
}
</script>
