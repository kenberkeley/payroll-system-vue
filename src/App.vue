<template>
  <default-layout id="app">
    <router-view/>
  </default-layout>
</template>
<script>
import DefaultLayout from '@/layouts/default.vue'

export default {
  components: { DefaultLayout }
}
</script>
