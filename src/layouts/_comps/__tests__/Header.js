/* global it, expect */
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import authModule from '@/store/auth'
import Header from '../Header.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

it('Main layout Header - Click Logout', () => {
  const store = new Vuex.Store({
    modules: {
      auth: {
        ...authModule,
        state: { username: 'John' }
      }
    }
  })
  const wrapper = shallowMount(Header, {
    localVue,
    store,
    stubs: { RouterLink: RouterLinkStub }
  })
  expect(store.getters['auth/isLogin']).toBeTruthy()
  wrapper.find('#headerNavMenu a.navbar-item').trigger('click')
  expect(store.getters['auth/isLogin']).toBeFalsy()
})
