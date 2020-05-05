const api = process.env.NODE_ENV === 'development' ? '/api' : '/api'

export const swiper = api + '/banner'
export const recommendSongs = api + '/personalized'
export const songDetail = api + '/playlist/detail'
export const newCDs = api + '/album/newest'
export const newSongs = api + '/top/song'
export const lyric = api + '/lyric'