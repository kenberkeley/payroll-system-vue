import { getField, updateField } from 'vuex-map-fields'
import ajax from '@/utils/ajax'

const RESET_STATE = 'RESET_STATE'

const initStateGen = () => ({
  firstName: null,
  lastName: null,
  annualIncome: null,
  superRate: null
})

export default {
  name: 'generator',
  namespaced: true,
  state: initStateGen(),
  getters: {
    getField
  },
  mutations: {
    updateField,
    [RESET_STATE] (state) {
      Object.assign(state, initStateGen())
    }
  },
  actions: {
    /**
     * @return {Promise<{ id }>}
     */
    savePayslip ({ commit }, payslip) {
      return ajax({
        method: 'post',
        url: '/payslips',
        data: payslip
      })
    },
    resetAll ({ commit }) {
      commit(RESET_STATE)
    }
  }
}
