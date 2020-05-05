<template>
  <div>
    <div class="content" :style="{backgroundImage:'url(' + backgroundImage + ')'}">
      <div class="item">
        <div class="h">

        </div>
        <div class="title-content">
          <img v-lazy="imgUrl" alt="">
          <span class="play-number"><i class="iconbofang iconfont"></i> {{playCount | setPlayCount}}</span>
          <div class="name">{{name}}
            <div class="tou" v-if="touImg">
              <img v-lazy="touImg" alt="">
              
              <span v-if="nickname">{{nickname}}></span>
              <div class="description description1">
                {{description}}
              </div>
            </div>
          </div>
        </div>
        <div class="downlond">
          <div class="comments">评论
            <span>{{comment}}</span>
          </div>
          <div class="comments">分享
            <span>{{share}}</span>
          </div>
          <div class="comments">下载</div>
          <div class="comments">多选</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"FindSongDetail",
 props:{
   songDetailId:{
     type:Number
   },
   imgUrl:{
     type:String
   },
   title:{
     type:String
   },
   name:{
     type:String
   },
   backgroundImage:{
     type:String
   },
   description:{
     type:String
   },
   touImg:{
     type:String
   },
   nickname:{
     type:String,
     default(){
       return '网易云'
     }
   },
   playCount:{
     type:Number
   },
   
   comment:{
     type:Number
   },
   share:{
     type:Number
   }
 },
 data(){
   return {
    //  backgroundImage:require('assets/logo.png'),
   }
 },
 created(){
   console.log(this.backgroundImage);
   
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
 components:{
  
 }
}
</script>

<style scoped>
.content{
  width: 100%;
  height: 255px;
  color: #eee;
   z-index:1;
   position: relative;
  padding-bottom: 25px;
  background-size:cover;
  /* margin-top: -50px; */
  
}
.content:after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: brightness(0.5) blur(5px);
    z-index: 2;
}
.h{
  height: 50px;
}
.item{
    position: absolute;
    width: 100%;

    /* padding-top: 50px; */

    z-index:11;

}
.title-content{
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  position: relative;
}
.title-content img{
  /* position: relative; */
  width: 150px;
  height: 150px;
  border-radius: 8px;
  
}
.play-number{
   position: absolute;
  color: #fff;
  right: 215px;
  top: 5px;
  font-size: 14px;
}
.name{
  width: 175px;
  font-size: 17px;
  font-weight: 700;
  line-height: 26px;
}
.tou{
  position: relative;
  height: 105px;
  overflow: hidden;
}
.name img{
  margin-top: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.name span{
  position: absolute;
  font-size: 12px;
  font-weight:normal;
  padding-top: 15px;
  margin-left: 5px;
}
.description1{
  margin-top: 10px;
   text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
    font-size: 13px;
    font-weight: normal;
    line-height: 1;
}

.downlond{
  display: flex;
  margin-top: 10px;
  justify-content:space-around;
  height: 50px;
}
.comments{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.iconfont {
font-family:"iconfont" !important;      
font-size:5 px;
font-style:normal;
 color: #fff;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
padding: 0 2px;
}
</style>