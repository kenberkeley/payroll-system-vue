import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import authInterceptor from './_authInterceptor'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

authInterceptor(router)

export default router
