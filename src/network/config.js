const api = process.env.NODE_ENV === 'development' ? '/api' : '/api'

export const swiper = api + '/banner'//轮播图
export const recommendSongs = api + '/personalized'
export const songDetail = api + '/playlist/detail'
export const topList = api + '/toplist/detail' //排行榜概要
export const newCDs = api + '/album/newest'
export const newSongs = api + '/top/song'
export const songsList = api + '/top/playlist'
export const lyric = api + '/lyric'
export const songUrl = api + '/song/url'
export const success = api + '/check/music'