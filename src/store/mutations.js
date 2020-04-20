import * as types from './mutation-types'

const mutations = {
  [types.SET_KEY](state, key) {
    state.key = key.key,
    state.key1 = key.key1
  }
}

export default mutations