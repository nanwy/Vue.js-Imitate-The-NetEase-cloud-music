<template>
  <div class="recommend-item" @click="SongDetail(idx)">
    <div class="item-content">
      
        <img v-lazy="picUrl" alt="">
      
      <span class="song-text">{{name}}</span>
      <span class="play-number" v-if="playCount"><i class="iconbofang icon"></i> {{playCount | setPlayCount}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
 props:{
   picUrl:{
     type:String
     },
   name:{
     typr:String
     },
   playCount:{
     type:Number,
     
     },
     songDetailId:{
       type:Number
     },
     idx:{
       type:String
     },
     newSongDeatilId:{
       type:Number
     }
 },
 filters:{
   setPlayCount(val){
     if(!val){
       return ''
     }
     if(val > 10000){
       val = Math.floor(val / 10000) + '万'
     }
     return val
   }
 },
 methods:{
   SongDetail(idx){
     if(!idx){
      if(this.songDetailId){
         this.$router.push({name:'song',params:{songDetailId:this.songDetailId}}) 
         return
      }
      if(this.newSongDeatilId){
        this.$router.push({name:'song',params:{newSongDeatilId:this.newSongDeatilId}})
        return
      }
     }
   }
 }
}
</script>

<style scoped>
.recommend-item{
  display: flex;
  width: 94px;
  position: relative;
}
.item-content{
 display: flex;
 flex-direction: column;
 justify-content: center;
}
.recommend-item .item-content img{
  width: 94px;
  height: 94px;
   border-radius: 5px;
}
.song-text{
  margin-top: 8px;
  margin-bottom: 15px;
  width: 94px;
  padding-top: 1px;
  height: 23px;
  text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  font-size: 12px;
}
.play-number{
  position: absolute;
  color: #fff;
  right: 5px;
  top: 5px;
  font-size: 14px;
}
.icon{

    font-family:"iconfont" !important;
    font-size:12px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
</style>