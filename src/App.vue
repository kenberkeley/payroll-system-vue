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
      const { matched } = this.$route
      return matched[matched.length - 1].meta[META_LAYOUT] || 'div'
    }
  }
}
</script>
