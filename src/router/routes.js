// Dynamic layout refers to https://stackoverflow.com/a/47465564/5172890
import MainLayout from '@/layouts/main.vue'
import {
  META_LAYOUT, META_REQUIRE_AUTH, META_FORBID_AUTHED
} from '@/constants/RouteFields'

export default [
  {
    path: '/',
    redirect: '/generator'
  },
  {
    path: '/generator',
    component: require('@/pages/generator/index').default,
    meta: {
      [META_LAYOUT]: MainLayout,
      [META_REQUIRE_AUTH]: true
    },
    children: [
      {
        path: '',
        redirect: 'capture'
      },
      {
        path: 'capture',
        component: require('@/pages/generator/1-capture').default
      },
      {
        path: 'preview',
        component: require('@/pages/generator/2-preview').default
      }
    ]
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
