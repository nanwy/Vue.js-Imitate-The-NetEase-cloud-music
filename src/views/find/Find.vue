<template>
  <div id="find">
     <scroll class="content" ref="scroll" @scroll='contentScroll'  :probe-type='3'>
    <page-loading style="height:5rem" v-show="loading"></page-loading>
    <find-swiper :banners="banners" @loadImg='swiperImgLoad'></find-swiper>
    <find-nav></find-nav>
    <recommend-songs :key="menuKey" @click.native="itclick"></recommend-songs>
    <new-c-d :key="menuKey"></new-c-d>
     </scroll>
  </div>
</template>

<script>
import {getSwiper} from 'network/find'
import FindSwiper from './findChild/FindSwiper'
import FindNav from './findChild/FindNav'
import RecommendSongs from './findChild/RecommendSongs'
import PageLoading from './findChild/pageLoading'
import NewCD from './findChild/NewCD'

import Scroll from 'components/common/scroll/Scroll'

export default {
  data(){
    return {
      type:0,
      banners:[],
      loading:true,
       menuKey:1,
    menuTree:[]
    }
  },
  components:{
    FindSwiper,
    FindNav,
    RecommendSongs,
    PageLoading,
    NewCD,
    Scroll
  },
  created(){
    this.type=1
    getSwiper(this.type).then(res => {
      this.banners.push(...res.data.banners)
      this.loading = false
      // console.log(res.data.banners);
      // console.log(this.banners);
      
      
    })
    ++this.menuKey
   
    
  },
  methods:{
    contentScroll(){

    },
    swiperImgLoad(){
      this.$refs.scroll.refresh()
      console.log('kk');
      
    },
    itclick(){
      ++this.menuKey
                 console.log(this.menuKey);
    }
  },
  watch:{
             menuTree(){
 
                
            }
       }
}
</script>

<style scoped>
#find{
   height: 100vh;
    position: relative;
    z-index: 11;
    background-color: #fff;

}
.content{
  height: calc(100% - 40px);
  background-color: #fff;
}
</style>