/* global jest, describe, beforeEach, it, expect */
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import auth from '../auth'
createLocalVue().use(Vuex)

jest.mock('@/utils/ajax')
jest.mock('@/utils/localStorage')

describe('Test auth vuex module', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({ modules: { auth } })
  })

  const syncUser = () => store.dispatch('auth/syncUser').then(() => {
    expect(store.state.auth.username).not.toBeNull()
    expect(store.getters['auth/isLogin']).toBeTruthy()
  })

  it('syncUser', syncUser)

  it('login', () => {
    const username = 'Ken'
    const password = '123456'
    return store.dispatch('auth/login', { username, password }).then(() => {
      expect(store.state.auth.username).toBe(username)
      expect(store.getters['auth/isLogin']).toBeTruthy()
    })
  })

  it('logout', () => {
    return syncUser().then(() => store.dispatch('auth/logout')).then(() => {
      expect(store.state.auth.username).toBeNull()
      expect(store.getters['auth/isLogin']).toBeFalsy()
    })
  })
})
