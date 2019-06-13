<template>
  <header class="navbar has-shadow is-block" role="navigation" aria-label="main navigation">
    <gradient-line />
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <logo width="6.25em" />
        </router-link>
        <a role="button" data-target="headerNavMenu" aria-label="menu" aria-expanded="false"
          :class="['navbar-burger', { 'is-active': isNavMenuVisible }]"
          @click="toggleNavMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="headerNavMenu" :class="['navbar-menu', { 'is-active': isNavMenuVisible }]">
        <div class="navbar-end">
          <a class="navbar-item" @click="logout">
            Logout
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import common from './common.mixin'

export default {
  mixins: [common],
  methods: {
    logout () {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/auth/login')
      })
    }
  }
}
</script>
