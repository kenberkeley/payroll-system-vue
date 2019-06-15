/* global it, expect */
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Footer from '../Footer.vue'

it('Main layout Footer', () => {
  const wrapper = shallowMount(Footer, {
    stubs: { RouterLink: RouterLinkStub }
  })
  const { isNavMenuVisible } = wrapper.vm
  const $btn = wrapper.find('a[data-target=footerNavMenu]')
  $btn.trigger('click')
  expect(wrapper.vm.isNavMenuVisible).toBe(!isNavMenuVisible)
  $btn.trigger('click')
  expect(wrapper.vm.isNavMenuVisible).toBe(isNavMenuVisible)
})
