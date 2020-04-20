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
              <span v-if="nickname">{{}}></span>
              <div class="description description1">
                {{description}}
              </div>
            </div>
          </div>
        </div>
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
  height: 500px;
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
}
.nav{
  display: flex;
  justify-content:space-evenly;
}
.left {

}
.left .description{
  display: block;
  font-size: 12px;

  width: 230px;
  
  text-overflow: ellipsis;

    
    overflow: hidden; 
    -webkit-box-orient: vertical;
    white-space:nowrap;

}
.right{

}
.iconfont {
font-family:"iconfont" !important;      
font-size:25px;
font-style:normal;
color: #fff;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
</style>