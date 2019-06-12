<template>
  <div class="-main-layout">
    <headerr />
    <main>
      <section class="container">
        <slot />
      </section>
    </main>
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
<style lang="scss">
.-main-layout {
  // refer to https://stackoverflow.com/a/45762747/5172890
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
}
</style>
