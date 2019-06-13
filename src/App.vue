<template>
  <component id="app" :is="layout">
    <router-view />
  </component>
</template>
<script>
import { META_LAYOUT } from '@/constants/RouteFields'

export default {
  metaInfo: {
    titleTemplate: '%s | MYOB Pay Slip Generator'
  },
  computed: {
    layout () {
      return this.$route.matched
        .map(rc => rc.meta[META_LAYOUT])
        .filter(Boolean)
        .pop() || 'div'
    }
  }
}
</script>
