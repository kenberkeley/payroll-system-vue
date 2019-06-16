import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
import routes from './routes'
import authInterceptor from './_authInterceptor'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'history',
  routes,
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

authInterceptor(router)

export default router
