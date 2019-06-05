export default [
  {
    path: '/',
    component: require('@/pages/index').default
  },
  {
    path: '/auth/login',
    component: require('@/pages/auth/login').default
  },
  {
    path: '/generator/capture',
    component: require('@/pages/generator/1-capture').default
  },
  {
    path: '/generator/preview',
    component: require('@/pages/generator/2-preview').default
  }
]
