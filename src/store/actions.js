import* as types from './mutation-types'
import {shuffle} from 'common/js/util.js'
import {playMode} from 'common/js/config.js'


function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

export default{
  setSongAll( {
    commit, state
  }, {list, index}){
    if(state.playMode === playMode.random){
      let newList = shuffle(list)
      commit(types.SET_PLAY_LIST, newList)
      index = findIndex(newList, list[index])
    }else{
      commit(types.SET_PLAY_LIST, list)
    }
    
    // commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAY_STATE, true)
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_SEQUENCE_LIST, list)

  }
}