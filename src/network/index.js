import axios from 'axios'
// import qs from 'qs'
import {


  swiper,
  songDetail,
  newCDs,
  newSongs,
  recommendSongs,
  lyric,
  songUrl,
  success,
  topList,
  songsList,
  songDetails

} from './config'

export default {
  getSwiper(type) {
    return axios.get(swiper, {
      params: {
        type
      }
    })
  },
  getRecommendSongs(limit) {
    return axios.get(recommendSongs, {
      params: {
        limit
      }
    })
  },
  getNewCDs(limit, offset) {
    return axios.get(newCDs, {
      params: {
        limit,
        offset
      }
    })
  },
  getNewSongs(type) {
    return axios.get(newSongs, {
      params: {
        type
      }
    })
  },
  getSongDetail(id) {
    return axios.get(songDetail, {
      params: {
        id

      }
    })
  },
  getLyric(id) {
    return axios.get(lyric, {
      params: {
        id
      }
    })
  },
  getSongPlay(id) {
    return axios.get(songUrl, {
      params: {
        id
      }
    })
  },
  getSuccessSong(id) {
    return axios.get(success, {
      params: {
        id
      }
    })
  },
  getTopList() {
    return axios.get(topList)
  },
  getSongList(limit = 30, order = 'hot', cat, offset) {
    return axios.get(songsList, {
      params: {
        limit,
        order,
        cat,
        offset
      }
    })
  },
  getAllSongDetail(ids) {
    return axios.get(songDetails, {
      params: {
        ids
      }
    })
  }
}
