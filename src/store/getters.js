export const key = state => state.key
export const key1 = state => state.key1
export const LOGIN = state => state.login
export const PLAY_LIST = state => state.playList
export const IS_FIND_SWIPER = state => state.isFindSwiper
export const PLAYING = state => state.playing
export const FULL_SCREEN = state => state.fullScreen
export const MODE = state => state.mode
export const SEQUENCE_LIST = state => state.sequenceList
export const CURRENT_INDEX = state => state.currentIndex
export const COPY_RIGHT = state => state.noCopyright
export const CURRENT_COPYRIGHT = (state) => {
  return state.noCopyright[state.currentIndex]
}

export const CURRENT_SONG = (state) => {
  return state.playList[state.currentIndex] || {}
}

