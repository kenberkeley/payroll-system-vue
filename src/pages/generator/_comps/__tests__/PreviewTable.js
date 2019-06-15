/* global it, expect */
import { mount } from '@vue/test-utils'
import PreviewTable from '../PreviewTable.vue'

it('Generator PreviewTable', () => {
  const wrapper = mount(PreviewTable, {
    propsData: {
      titles: ['T1', 'T2'],
      rows: [
        ['A', 'B'],
        ['C', 'D'],
        ['E', 'F', '$']
      ]
    }
  })
  expect(wrapper.element).toMatchSnapshot()
})
