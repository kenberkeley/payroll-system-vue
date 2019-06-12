import auth from './auth/router'

export default function mountRouters (app) {
  app.use(auth)
}
