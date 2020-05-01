import * as types from './mutation-types'

const mutations = {
  [types.SET_KEY](state, key) {
    state.key = key.key,
    state.key1 = key.key1
  },
  [types.SHOW_LOGIN](state){
    state.login = true
    console.log('点击');
    
  },
  [types.HIDE_LOGIN](state){
    state.login = false
  },
  [types.SET_PLAY_LIST](state, list){
    state.playList = list
    console.log(list);
    
  },
  [types.IS_FIND_SWIPER](state){
    state.isFindSwiper = false
  },
  [types.HIDE_FIND_SWIPER](state){
    state.isFindSwiper = true
  }
}

export default mutations