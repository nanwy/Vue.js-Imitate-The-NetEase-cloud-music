<template>
  <div>
    <find-swiper :banners="banners"></find-swiper>
    <find-nav></find-nav>
    <recommend-songs></recommend-songs>
  </div>
</template>

<script>
import {getSwiper} from 'network/find'
import FindSwiper from './findChild/FindSwiper'
import FindNav from './findChild/FindNav'
import RecommendSongs from './findChild/RecommendSongs'
export default {
  data(){
    return {
      type:0,
      banners:[]
    }
  },
  components:{
    FindSwiper,
    FindNav,
    RecommendSongs
  },
  created(){
    this.type=1
    getSwiper(this.type).then(res => {
      this.banners.push(...res.data.banners)
      console.log(res.data.banners);
      // console.log(this.banners);
      
      
    })
  }
}
</script>

<style>

</style>