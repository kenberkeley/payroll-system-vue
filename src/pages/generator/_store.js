import { getField, updateField } from 'vuex-map-fields'

const initState = () => ({
  firstName: null,
  lastName: null,
  annualIncome: null,
  superRate: null
})

export default {
  name: 'generator',
  namespaced: true,
  state: initState(),
  getters: {
    getField
  },
  mutations: {
    updateField
  }
}
