// https://router.vuejs.org/guide/advanced/meta.html
import store from '@/store/'
import { META_REQUIRE_AUTH, META_FORBID_AUTHED, QUERY_REDIRECT_URL } from '@/constants/RouteFields'

export default router => {
  router.beforeEach((to, from, next) => {
    const isLogin = store.getters['auth/isLogin']

    for (let i = 0; i < to.matched.length; i++) {
      let { meta } = to.matched[i]
      if (meta[META_REQUIRE_AUTH] && !isLogin) {
        next({
          path: '/auth/login',
          query: {
            [QUERY_REDIRECT_URL]: encodeURIComponent(to.fullPath)
          }
        })
        return
      } else if (meta[META_FORBID_AUTHED] && isLogin) {
        next({
          path: from.fullPath || '/',
          replace: true
        })
        return
      }
    }

    next()
  })
}
