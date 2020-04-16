<template>
  <div class="recommend-songs">
    <div class="title">
      <div class="recommend">推荐歌单</div>
      <div class="square">歌单广场</div>
    </div>
    <page-loading  v-show="loading"></page-loading>
    <div class="recommends-content">
      <recommend-songs-item :picUrl="item.picUrl" :name="item.name" :playCount="item.playCount" v-for='item in recommendsongs'></recommend-songs-item>
    </div>
  </div>
</template>

<script>
import {getRecommendSongs} from 'network/find'
import RecommendSongsItem from './RecommendSongsItem'
import PageLoading from './pageLoading'
import {getRandomArray} from 'components/common/getRandomArray.js'
export default {
  data(){
    return {
      limit:10,
      recommendsongs:[],
      loading:true
    }
  },
  components:{
    RecommendSongsItem,
    PageLoading
  },
created(){

  getRecommendSongs(this.limit).then(res => {
    // console.log(res);
    
    this.recommendsongs = getRandomArray(res.data.result,6)
    this.loading=false
    console.log(this.recommendsongs);
  })
}
}
</script>

<style scoped>
.recommend-songs{
  padding: 0 10px;
}
.title{
  width: 100% ;
  margin-top: 15px;
  display: flex;
  
}
.recommend{
  font-weight: 700;
  font-size: 14px;
}
.square{
  margin-left: auto;
  border: 1px solid #eee;
  padding: 6px 12px 6px 12px;
  border-radius: 12px;
  font-size: 12px;
}
.recommends-content{
  margin-top: 10px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>