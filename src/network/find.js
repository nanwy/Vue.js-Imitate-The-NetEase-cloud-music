import {request} from './base'

export function getSwiper(type){
  return request({
    url: '/banner',
    params: {
      type
    }
  })
}

export function getRecommendSongs(limit){
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewCDs(limit, offset){
  return request({
    url: '/top/album',
    params: {
      limit,
      offset
     
    }
  })
}

export function getNewSongs(type){
  return request({
    url: '/top/song',
    params: {
      type
    }
  })
}

export function getSongDetail(id){
  return request({
    url: 'playlist/detail',
    params: {
      id
    }
  })
}