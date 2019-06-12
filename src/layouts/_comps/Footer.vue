<template>
  <footer class="navbar has-shadow is-block" role="navigation" aria-label="navigation">
    <div id="footer-links" class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <logo width="7em" />
        </router-link>
        <a role="button" data-target="footerNavMenu" aria-label="menu" aria-expanded="false"
          :class="['navbar-burger', { 'is-active': isNavMenuVisible }]"
          @click="toggleNavMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="footerNavMenu" :class="['navbar-menu', { 'is-active': isNavMenuVisible }]">
        <div class="navbar-end">
          <a class="navbar-item">
            Link 1
          </a>
          <a class="navbar-item">
            Link 2
          </a>
          <a class="navbar-item">
            Link 3
          </a>
        </div>
      </div>
    </div>
    <div id="footer-note">
      <div class="container is-clearfix">
        <p class="is-pulled-left">
          Excepteur sint occaecat
        </p>
        <p class="is-pulled-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </div>
    <gradient-line />
  </footer>
</template>
<script>
import common from './common.mixin'

export default {
  mixins: [common]
}
</script>
<style>
#footer-links {
  padding: .75em 0;
}
#footer-note {
  padding: .5em .25em;
  color: #fff;
  background-color: #2e3e4f;
}
</style>
