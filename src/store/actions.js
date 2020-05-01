import {
  SET_PLAY_LIST
} from './mutation-types'

export default{
  setSongAll({
    commit,
  }, {
    list
  }){
    commit(SET_PLAY_LIST, list)
    return true
  }
}