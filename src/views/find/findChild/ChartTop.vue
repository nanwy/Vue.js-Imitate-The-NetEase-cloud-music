<template>
  <div class="recommend-item" @click="SongDetail(idx)">
    <div class="item-content">
      <div class="box-shadow"></div>
      <img v-lazy="picUrl" alt="">
      <div class="box-shadow1"></div>
      <i>{{num}}</i>
      <div class="song-text">
        <span  v-for="(item,index) in tracks">
        {{(index+1) +  item.first + '-' + item.second}}</span>
      </div>
      
      <span class="updata-time" v-if="updataTime"> {{updataTime}}</span>
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
   updataTime:{
     type:String,
     
     },
     songDetailId:{
       type:Number
     },
     idx:{
       type:String
     },
     newSongDeatilId:{
       type:Number
     },
     isSong:{
       type:Boolean
     },
     tracks:{
       type:Array
     },
     num:{
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
         this.$router.push({name:'songsdetail',params:{songDetailId:this.songDetailId}}) 
         console.log(this.tracks);
         
         return
      }
      if(this.isSong){
         this.$emit('startPlay')
      }
     }
   },
   
 }
}
</script>

<style lang="less" scoped>
.recommend-item{
  display: flex;
  width: 94px;
  position: relative;
}
.item-content{
 display: flex;
 /* flex-direction: column; */
 justify-content: center;
 .box-shadow{
   width: 94px;
   height: 94px;
   position: absolute;
   left: 0;
   top: 0;
   box-shadow: 0 17px 20px -8px #3030307e inset;
   border-radius: 5px;
 }
 .box-shadow1{
   width: 94px;
   height: 94px;
   position: absolute;
   left: 0;
   top: 0;
   box-shadow: 0 -17px 20px -8px #3030307e inset;
   border-radius: 5px;
 }
}
.recommend-item .item-content img{
  width: 94px;
  height: 94px;
  border-radius: 5px;
  // overflow: hidden;
}
.song-text{
  margin-left: 8px;
  margin-bottom: 15px;
  width: 94px;
  padding-top: 1px;
  /* height: 23px; */
  display: flex;
  flex-direction: column;
  font-size: 12px;
  span{
    margin-bottom: 16px;
  }
}
.updata-time{
  position: absolute;
  color: #fff;
  left: 5px;
  bottom: 10px;
  font-size: 12px;
  transform: scale(.9,.9);
}
.icon{

    font-family:"iconfont" !important;
    font-size:12px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
</style>