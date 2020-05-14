<template>
  <div class="new-cd">
    <div class="cd-title">
      <div class="cd-left">
        <span @click="cur='newsong'" :class="{active: cur=== 'newsong'}">新碟</span>
        <i>|</i>
        <span @click="cur='newcd'" :class="{active:cur === 'newcd'}">新歌</span>
       
      </div>
      <div class="cd-square" v-show="cur ==='newsong'">更多新碟</div>
      <div class="cd-square" v-show="cur ==='newcd'">新歌推荐</div>
      
    </div>
    <page-loading  v-show="loading"></page-loading>
    <div v-show="!loading">
      <div class="newsong" v-show="cur ==='newsong'">
      <recommend-songs-item   v-for="(item,index) in newCDs" 
      :picUrl='item.picUrl' :name='item.name' 
      :playCount='0' :key="index"
      :newSongDeatilId="item.id"></recommend-songs-item>
    </div>
    <div class="newsong" v-show="cur ==='newcd'">
      <recommend-songs-item   v-for="(item,index) in newSongs" @startPlay="toAudioList(item,index)" :picUrl='item.album.blurPicUrl' 
      :name='item.album.name' 
      :playCount='0'
      :isSong='true'
      :key="index"></recommend-songs-item>
    </div>
    </div>
  </div>
</template>

<script>

import {getRandomArray} from 'components/common/getRandomArray.js'
import RecommendSongsItem from './RecommendSongsItem'
import PageLoading from 'components/common/pageLoading'
import api from 'network/index'
import { mapActions,mapGetters, } from 'vuex'
export default {
  
 data(){
   return {
     cur:'newsong',
     limit:10,
     newCDs:[],
     
     type:[0,7,96,8,16],
     type1:0,
     newSongs:[],
     loading:true
   }
 },
 components:{
   RecommendSongsItem,
   PageLoading
 },
 created(){
   
   api.getNewCDs(this.limit).then(res => {
    //  console.log(res);
    if(res.data.code === 200){
       this.newCDs = getRandomArray(res.data.albums,3)
    //  console.log(this.newCDs);
    this.loading = false
    }
     
   })
   this.type1 = getRandomArray(this.type,1)
   console.log(this.type1[0]);
   
   api.getNewSongs(this.type1[0]).then(res => {
     console.log(res);
     if(res.data.code === 200){
       this.newSongs.push(...res.data.data)
     this.newSongs = getRandomArray(this.newSongs,3)
     this.loading = false
    //  this.newSongs = this.newSongs.artists
     console.log(this.newSongs);
    }
     
   })
 },
 methods:{
   toAudioList(item,index){
     console.log(item);
     this.addToAudioList(
       {
        list:item,
        index
     }
     )
     
   },
    ...mapActions(['addToAudioList'])
 }
}
</script>

<style scoped>
.new-cd{
  padding: 0 10px;
}
.cd-title{
  display: flex;
  width: 100%;
  margin-top: 40px;
}
.cd-left{
  font-weight: 700;
  font-size: 14px;
  position: relative;
   color:rgb(221, 221, 221);
}
span{
  width: 40px;
  height: 40px;
  color: rgb(180, 180, 180);
}
span:nth-child(1){
  position: absolute;
  left: 10px;
}
span:nth-child(3){
  position: absolute;
  left: 60px;
}
.new-cd .cd-title i{
 /* position: absolute; */
 margin-left: 50px;

 font-size: 12px;
}
.active{
  font-size: 16px;
  color: #000;
}
.cd-square{
  margin-top: -5px;
  margin-left: auto;
  border: 1px solid #eee;
  padding: 6px 12px 6px 12px;
  border-radius: 12px;
  font-size: 12px;  
}
.newsong{
  display: flex;
    margin-top: 10px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>