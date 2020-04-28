import axios from 'axios'

import {

 
  swiper,
  songDetail,
  newCDs,
  newSongs,
  recommendSongs
  
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
  }
}
