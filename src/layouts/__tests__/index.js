/* global it, expect */
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueRouter from 'vue-router'
import MainLayout from '../main.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

it('Main Layout', () => {
  const content = '<p>Hello World</p>'
  const wrapper = mount(MainLayout, {
    localVue,
    slots: { default: content },
    stubs: { RouterLink: RouterLinkStub }
  })
  expect(wrapper.find('main').html()).toContain(content)
  expect(wrapper.element).toMatchSnapshot()
})
