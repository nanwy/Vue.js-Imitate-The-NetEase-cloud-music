import {request} from './base'

export function getSwiper(type){
  return request({
    url: '/banner',
    params: {
      type
    }
  })
}