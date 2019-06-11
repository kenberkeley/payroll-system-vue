<template>
  <div>
    <headerr />
    <slot />
    <footerr />
  </div>
</template>
<script>
import Headerr from './_comps/Header.vue'
import Footerr from './_comps/Footer.vue'

export default {
  components: { Headerr, Footerr }
}
</script>
