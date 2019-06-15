/* global it, expect */
import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

it('Generator Header', () => {
  const title = 'Hello World'
  const wrapper = mount(Header, {
    propsData: {
      icon: '',
      title
    }
  })
  expect(wrapper.find('h2').text()).toBe(title)
})
