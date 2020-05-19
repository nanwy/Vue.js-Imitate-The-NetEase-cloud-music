<template>
  <div class="charts">
    
    <gbnav class="iconfont" :flag='true'>
      <span>排行榜</span>
    </gbnav>
    <page-loading  v-show="loading" style="height:5rem"></page-loading>
    <scroll class="content" :class="{'height5':isPlayList}" ref="scroll"  :probe-type='3' @scroll='contentscroll'>
    <div class="recommend-songs">
    <div class="title">
      <div class="recommend">官方榜</div>
    </div>
    <div class="recommends-content recommend-charts">
      <chart-top v-for='(item,index) in authoritySongs' :picUrl="item.coverImgUrl" 
      :name="item.name" 
      :updataTime="item.updateFrequency"
      :tracks="item.tracks"
      :songDetailId='item.id'
      :key="index"
      class="text">>
      </chart-top>
    </div>
    </div>
    <div class="recommend-songs">
    <div class="title">
      <div class="recommend">推荐榜</div>
    </div>
    
    <div class="recommends-content">
      <recommend-songs-item 
      v-for='(item,index) in recommendsongs' :picUrl="item.coverImgUrl" 
      :name="item.name" 
      :updataTime="item.updateFrequency" 
      :songDetailId='item.id'
      :key="index"
      class="text"></recommend-songs-item>
    </div>
    </div>
    <div class="recommend-songs">
    <div class="title">
      <div class="recommend">全球榜</div>
    </div>
    
    <div class="recommends-content">
      <recommend-songs-item 
      v-for='(item,index) in globalSongs' :picUrl="item.coverImgUrl" 
      :name="item.name" 
      :updataTime="item.updateFrequency" 
      :songDetailId='item.id'
      :key="index"
      class="text"></recommend-songs-item>
    </div>
    </div>
    </scroll>
  </div>
</template>

<script>
import Gbnav from 'components/common/Gbnav'
import RecommendSongsItem from '../RecommendSongsItem'
import api from 'network/index'
import PageLoading from 'components/common/pageLoading'
import Scroll from 'components/common/scroll/Scroll'
import ChartTop from '../ChartTop'
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      authoritySongs:[],
      recommendsongs:[],
      loading:true,
      globalSongs:[]
    }
  },
  computed:{
    ...mapGetters({
      playList:'PLAY_LIST',
    }),
    isPlayList(){
      return this.playList.length? true : false
    }
  },
  components:{
    Gbnav,
    RecommendSongsItem,
    PageLoading,
    ChartTop,
    Scroll
  },
  created(){
    this._getTopListInfo()
  },
  methods:{
    _getTopListInfo(){
      api.getTopList().then(res => {
        
        const data = res.data
        console.log(res)
        if(data.code === 200){
          
          
          this.recommendsongs = data.list.splice(4,6)
          console.log(this.recommendsongs);
          this.recommendsongs.splice(4,1,data.list[17])
          console.log(this.recommendsongs);
          this.globalSongs = data.list.splice(6,6)
          this.globalSongs.splice(1,1,data.list[6])
          this.globalSongs.splice(5,1,data.list[7])
          console.log(this.globalSongs);
          this.authoritySongs = data.list.splice(0,4)
          console.log(this.authoritySongs);
          this.loading = false
        }
      })
    },
    _getIdxInfo () {
      api.getTopList().then(res => {
          const data = res.data
          console.log(res)        
          
        })
    },
    contentscroll(){

    }
  }
}
</script>

<style lang='less' scoped>
.charts{
  // display: flex;
  height: 100vh;
  .iconfont {
    margin-top: 10px;
  font-family:"iconfont" !important;      
  font-size:18px;
  font-style:normal;
   color: #000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* padding: 0 5px; */
  span{
    margin-left: 20px;
    flex: 1;
  }
  }
  .content{
     overflow: hidden;
  position: absolute;
  top: 45px;
  bottom: 0px;
  left: 0;
  right: 0;
  }
  .height5{
    bottom: 55px;
  }
  .recommend-songs{
    padding: 0 15px;
  }
  .recommends-content{
     margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    .text{
      white-space: nowrap !important;
      // font-size: 15px !important;
      // transform: scale(.9,.9);
    }
  }
  .recommend-charts{
    flex-direction: column;
  }
}

</style>