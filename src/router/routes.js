// Dynamic layout refers to https://stackoverflow.com/a/47465564/5172890
import MainLayout from '@/layouts/main.vue'
import {
  META_LAYOUT, META_REQUIRE_AUTH, META_FORBID_AUTHED
} from '@/constants/RouteFields'

export default [
  {
    path: '/',
    redirect: '/generator/capture'
  },
  {
    path: '/generator/capture',
    component: require('@/pages/generator/1-capture').default,
    meta: {
      [META_LAYOUT]: MainLayout,
      [META_REQUIRE_AUTH]: true
    }
  },
  {
    path: '/generator/preview',
    component: require('@/pages/generator/2-preview').default,
    meta: {
      [META_LAYOUT]: MainLayout,
      [META_REQUIRE_AUTH]: true
    }
  },
  {
    path: '/auth/login',
    alias: '/login',
    component: require('@/pages/auth/login').default,
    meta: {
      [META_FORBID_AUTHED]: true
    }
  },
  { // 404
    path: '*',
    redirect: '/'
  }
]
