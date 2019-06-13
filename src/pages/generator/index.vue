<template>
  <div class="-generator-page">
    <h1 class="is-size-4 has-text-weight-medium">
      Pay Slip Generator
    </h1>
    <router-view />
  </div>
</template>
<script>
import store from '@/store/'
import module from './_store'

export default {
  beforeRouteEnter (to, from, next) {
    store.registerModule(module.name, module)
    next()
  },
  beforeRouteLeave (to, from, next) {
    store.unregisterModule(module.name)
    next()
  }
}
</script>
<style lang="scss">
.-generator-page {
  padding: 3em .75em;

  h1 {
    margin-bottom: .5em;
  }
}
</style>
