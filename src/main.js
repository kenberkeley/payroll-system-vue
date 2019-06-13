import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import jwt from './utils/jwt'

import '@/assets/style/myob-bulma.scss'

Vue.config.productionTip = false;

(jwt.get()
  ? store.dispatch('auth/syncUser')
  : Promise.resolve() // do nothing
).then(() => {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
})
