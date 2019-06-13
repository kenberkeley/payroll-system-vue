<template>
  <div class="-login">
    <div class="has-text-centered">
      <logo width="6em" />
      <h1 class="is-size-4 has-text-weight-medium">
        Sign in to Pay Slip Generator
      </h1>
    </div>
    <br />
    <form class="box" @submit.prevent="login">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input type="text" v-model="username" class="input is-medium" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input type="password" v-model="password" class="input is-medium" required>
        </div>
      </div>
      <!-- TODO: CAPTCHA -->
      <br />
      <div class="field">
        <div class="control">
          <button type="submit" class="button is-primary is-medium is-fullwidth">
            Sign in
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Logo from '@/components/Logo.vue'
import { QUERY_REDIRECT_URL } from '@/constants/RouteFields'

export default {
  components: { Logo },
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    login () {
      this.$store.dispatch('auth/login', this.$data).then(() => {
        let redirectUrl = this.$route.query[QUERY_REDIRECT_URL]
        if (redirectUrl) {
          redirectUrl = decodeURIComponent(redirectUrl)
          // ensure `redirectUrl` is a subpath, not http://evil.com, etc
          if (!redirectUrl.startsWith('/')) {
            redirectUrl = null
          }
        }
        this.$router.replace(redirectUrl || '/')
      })
    }
  }
}
</script>
<style>
.-login {
  margin: 0 auto;
  padding-top: 15%;
  width: 40%;
  min-width: 300px;
  max-width: 500px;
}
</style>
