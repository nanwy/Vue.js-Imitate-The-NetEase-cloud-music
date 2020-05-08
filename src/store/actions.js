import* as types from './mutation-types'

export default{
  setSongAll( {
    commit, state
  }, {list, index, nolist}){
    commit(types.SET_PLAY_LIST, list)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAY_STATE, true)
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_COPY_RIGHT, nolist)
  }
}