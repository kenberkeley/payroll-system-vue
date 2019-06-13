import ajax from '@/utils/ajax'
import jwt from '@/utils/jwt'

const SET_STATE = 'SET_STATE'

export default {
  namespaced: true,
  state: {
    username: null
  },
  getters: {
    isLogin (state) {
      return !!state.username
    }
  },
  mutations: {
    [SET_STATE] (state, nextState) {
      Object.assign(state, nextState)
    }
  },
  actions: {
    syncUser ({ commit }) {
      return ajax({ url: '/whoami' }).then(({ username }) => {
        commit(SET_STATE, { username })
      })
    },
    login ({ commit }, { username, password }) {
      return ajax({
        method: 'post',
        url: '/login',
        data: { username, password }
      }).then(({ token }) => {
        commit(SET_STATE, { username })
        jwt.update(token)
      })
    },
    logout ({ commit }) {
      commit(SET_STATE, { username: null })
      jwt.clear()
    }
  }
}
