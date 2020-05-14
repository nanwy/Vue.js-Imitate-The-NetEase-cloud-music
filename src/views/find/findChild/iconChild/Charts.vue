<template>
  <div class="charts">
    <page-loading  v-show="loading"></page-loading>
    <gbnav class="iconfont">
      <span>排行榜</span>
    </gbnav>
    <div class="recommend-songs">
    <div class="title">
      <div class="recommend">推荐榜</div>
    </div>
    
    <div class="recommends-content">
      <recommend-songs-item 
      v-for='(item,index) in recommendsongs' :picUrl="item.coverImgUrl" 
      :name="item.name" 
      :playCount="item.playCount" 
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
      :playCount="item.playCount" 
      :songDetailId='item.id'
      :key="index"
      class="text"></recommend-songs-item>
    </div>
    </div>
  </div>
</template>

<script>
import Gbnav from 'components/common/Gbnav'
import RecommendSongsItem from '../RecommendSongsItem'
import api from 'network/index'
import PageLoading from 'components/common/pageLoading'
export default {
  data(){
    return {
      recommendsongs:[],
      loading:true,
      globalSongs:[]
    }
  },
  components:{
    Gbnav,
    RecommendSongsItem,
    PageLoading
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
  }
}
</script>

<style lang='less' scoped>
.charts{
  // display: flex;
  
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
  .recommend-songs{
    padding: 0 5px;
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
}

</style>