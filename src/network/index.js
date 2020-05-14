import axios from 'axios'

import {

 
  swiper,
  songDetail,
  newCDs,
  newSongs,
  recommendSongs,
  lyric,
  songUrl,
  success,
  topList
  
} from './config'

export default{
  getSwiper(type){
    return axios.get(swiper, {
      params: {
        type
      }
    })
  },
  getRecommendSongs(limit){
    return axios.get(recommendSongs, {
      params: {
        limit
      }
    })
  },
  getNewCDs(limit, offset){
    return axios.get(newCDs, {
      params: {
        limit,
        offset
      }
    })
  },
  getNewSongs(type){
    return axios.get(newSongs, {
      params: {
        type
      }
    })
  },
  getSongDetail (id) {
    return axios.get(songDetail, {
      params: {
        id
        
      }
    })
  },
  getLyric (id){
    return axios.get(lyric, {
      params: {
        id
      }
    })
  },
  getSongPlay(id){
    return axios.get(songUrl, {
      params: {
        id
      }
    })
  },
  getSuccessSong(id){
    return axios.get(success, {
      params: {
        id
      }
    })
  },
  getTopList(){
    return axios.get(topList)
  }
}
