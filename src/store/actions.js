import * as types from './mutation-types'
import { shuffle } from 'common/js/util.js'
import { playMode } from 'common/js/config.js'


function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

export default {
  setSongAll({
    commit, state
  }, { list, index }) {
    if (state.playMode === playMode.random) {
      let newList = shuffle(list)
      commit(types.SET_PLAY_LIST, newList)
      index = findIndex(newList, list[index])
    } else {
      commit(types.SET_PLAY_LIST, list)
    }

    // commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAY_STATE, true)
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_SEQUENCE_LIST, list)

  },
  addToAudioList({
    commit, state

  }, { list }) {
    let audioList = state.playList
    let playList = state.sequenceList

    let currentIndex = state.currentIndex
    // 记录当前歌曲
    let audioIng = audioList[currentIndex]
    // 查找当前列表中是否有要插入的歌曲,并返回它的索引
    let findAudioIndex = findIndex(audioList, list)
    // 因为是插入歌曲，所以索引要+1
    currentIndex++
    // 插入这首歌到当前索引位置
    audioList.splice(currentIndex, 0, list)
    // 如果已经有了这首歌
    if (findAudioIndex > -1) {
      // 如果当前插入序号大于列表中的序号
      if (currentIndex > findAudioIndex) {
        audioList.splice(findAudioIndex, 1)
        currentIndex--
      } else {
        audioList.splice(currentIndex + 1, 1)
      }
    }

    let currentPlayIndex = findIndex(playList, audioIng) + 1

    let findPlayIndex = findIndex(playList, list)

    playList.splice(currentPlayIndex, 0, list)

    if (findPlayIndex > -1) {
      if (currentPlayIndex > findPlayIndex) {
        playList.splice(findPlayIndex, 1)
      } else {
        playList.splice(findPlayIndex + 1, 1)
      }
    }
    // commit(types.SET_PLAY_LIST, audioList)
    commit(types.SET_CURRENT_INDEX, currentIndex)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAY_STATE, true)
  },
}
