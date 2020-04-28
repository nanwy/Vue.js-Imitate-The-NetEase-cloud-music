<template>
  <div id="find">
     <scroll class="content" ref="scroll" @scroll='contentScroll'  :probe-type='3'>
    <page-loading style="height:5rem" v-show="loading"></page-loading>
    <find-swiper :banners="banners" @loadImg='swiperImgLoad'></find-swiper>
    <find-nav></find-nav>
    <recommend-songs :key="key"></recommend-songs>
    <new-c-d :key="key1"></new-c-d>
     </scroll>
  </div>
</template>

<script>
import {getSwiper} from 'network/find'
import FindSwiper from './findChild/FindSwiper'
import FindNav from './findChild/FindNav'
import RecommendSongs from './findChild/RecommendSongs'
import PageLoading from 'components/common/pageLoading'
import NewCD from './findChild/NewCD'
import api from 'network/index'
import {mapGetters} from 'vuex'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name:'Find',
  data(){
    return {
      type:0,
      banners:[],
      loading:true,
       menuKey:1,
    menuTree:[],
    
    }
  },
  computed:{
   ...mapGetters([
     'key','key1'
   ])
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
    api.getSwiper(this.type).then(res => {
      this.banners.push(...res.data.banners)
      this.loading = false
       console.log(res.data.banners);
    })
    // getSwiper(this.type).then(res => {
    //   this.banners.push(...res.data.banners)
    //   this.loading = false
    //   // console.log(res.data.banners);
    //   // console.log(this.banners);
      
      
    // })
    
    
   
    
  },
  activated(){
    console.log(this.$refs.scroll.scroll);
    this.$refs.scroll.refresh()
  },
  methods:{
    contentScroll(){

    },
    swiperImgLoad(){
      this.$refs.scroll.refresh()
      console.log('kk');
      
    },
    itclick(){
      
                 console.log(this.key1);
                 
    },
    
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