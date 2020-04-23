<template>
  <div>
    <div class="content" :style="{background}">
      <div class="item">
        <div class="title">
          <gbnav>
          <div class="left">
            <span>{{title}}</span>
            <span class="description">编辑推荐:{{description}}</span>
          </div>
          <div class="right">
            <span>
              <i class="iconserch iconfont"></i>
            </span>
            <span>
              <i class="iconcaidan1 iconfont"></i>
            </span>
          </div>
      
          </gbnav>
        </div>
        <div class="title-content">
          <img v-lazy="imgUrl" alt="">
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
    <div class="play-list">
      <div class="play-title">
        <i>播放</i>
        <span>播放全部</span>
        <span class="total" v-if="many">(共{{many}}首)</span>
        <span class="star" v-if="subscribedCount">+收藏({{subscribedCount}})</span>
      </div>
    </div>
  </div>
</template>

<script>
import Gbnav from 'components/common/Gbnav'
export default {
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
   background:{
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
   many:{
     type:Number
   },
   subscribedCount:{
     type:Number
   },
   comment:{
     type:Number
   },
   share:{
     type:Number
   }
 },
 components:{
   Gbnav
 }
}
</script>

<style scoped>
.content{
  width: 100%;
  height: 320px;
  color: #fff;
   z-index:1;
   position: relative;

}
.content:after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(50px);
    z-index: 2;
}
.item{
    position: absolute;
    width: 100%;
    margin-top: 10px;


    z-index:11;

}
.title-content{
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
}
img{
  width: 150px;
  height: 150px;
  border-radius: 8px;
  
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
.nav{
  display: flex;
  justify-content:space-evenly;
}

.left .description{
  display: block;
  font-size: 12px;
  margin-top: 8px;
  transform: scale(.9);
  width: 230px;
  
  text-overflow: ellipsis;

  font-weight: 100;
    overflow: hidden; 
    -webkit-box-orient: vertical;
    white-space:nowrap;
  color: #efebeb;
  transform-origin: 0 0
}

.iconfont {
font-family:"iconfont" !important;      
font-size:25px;
font-style:normal;
color: #fff;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
padding: 0 5px;
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
.play-list{
    
  margin-top: -15px;
  position: relative;
  z-index: 10;
}
.play-title{
  display: flex;
  height: 60px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fff;
  line-height: 60px;
}
.total{
  font-size: 12px;
  color: #ccc;
}
.play-title .star{
  margin-right: 5px;
  margin-top: 10px;
margin-left: auto;
color: #fff;
height: 35px;
background-color: red;
border-radius: 50px;
padding: 2px 10px 2px 10px;
line-height: 38px;
}
</style>