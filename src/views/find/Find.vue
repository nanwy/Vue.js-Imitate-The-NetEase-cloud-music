<template>
  <div>
    <page-loading style="height:5rem" v-show="loading"></page-loading>
    <find-swiper :banners="banners"></find-swiper>
    <find-nav></find-nav>
    <recommend-songs></recommend-songs>
    <new-c-d></new-c-d>
  </div>
</template>

<script>
import {getSwiper} from 'network/find'
import FindSwiper from './findChild/FindSwiper'
import FindNav from './findChild/FindNav'
import RecommendSongs from './findChild/RecommendSongs'
import PageLoading from './findChild/pageLoading'
import NewCD from './findChild/NewCD'
export default {
  data(){
    return {
      type:0,
      banners:[],
      loading:true
    }
  },
  components:{
    FindSwiper,
    FindNav,
    RecommendSongs,
    PageLoading,
    NewCD
  },
  created(){
    this.type=1
    getSwiper(this.type).then(res => {
      this.banners.push(...res.data.banners)
      this.loading = false
      // console.log(res.data.banners);
      // console.log(this.banners);
      
      
    })
  }
}
</script>

<style>

</style>