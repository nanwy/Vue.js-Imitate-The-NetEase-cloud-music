<template>
  <div>
    
    <div class="content" :style="{background}">
      <div class="item">
      <gbnav>
      <div class="left">
        <span>{{title}}</span>
      <span class="name">编辑推荐:{{name}}</span>
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
      <img v-lazy="imgUrl" alt="">
      <div>asdasdas</div>
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
   }
 },
 components:{
   Gbnav
 }
}
</script>

<style scoped>
.content{
  width: 500px;
  height: 500px;

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
    width: 500px;
    


    z-index:11;

}
img{
  width: 200px;
  height: 200px;
  
}
.left .name{
  display: block;
  font-size: 12px;

  width: 230px;
  
  text-overflow: ellipsis;

    
    overflow: hidden; 
    -webkit-box-orient: vertical;
    white-space:nowrap;

}
.right{
  margin-left: 67px;
}
.iconfont {
font-family:"iconfont" !important;      
font-size:25px;
font-style:normal;
color: #000;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
</style>