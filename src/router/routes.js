// Dynamic layout refers to https://stackoverflow.com/a/47465564/5172890
import MainLayout from '@/layouts/main.vue'

export default [
  {
    path: '/',
    component: require('@/pages/index').default,
    meta: { layout: MainLayout }
  },
  {
    path: '/auth/login',
    component: require('@/pages/auth/login').default
  },
  {
    path: '/generator/capture',
    component: require('@/pages/generator/1-capture').default,
    meta: { layout: MainLayout }
  },
  {
    path: '/generator/preview',
    component: require('@/pages/generator/2-preview').default,
    meta: { layout: MainLayout }
  },
  { // 404
    path: '*',
    redirect: '/'
  }
]
