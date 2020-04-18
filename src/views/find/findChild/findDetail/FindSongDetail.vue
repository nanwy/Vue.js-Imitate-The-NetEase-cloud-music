<template>
  <div>
    <gbnav>
      <div class="left">
        <span>{{title}}</span>
      <span class="name">编辑推荐:{{name}}</span>
      </div>
      <div class="right">
        <span>搜索</span>
      <span>菜单</span>
      </div>
    </gbnav>
    <div class="content" :style="{background}">
      <img v-lazy="imgUrl" alt="">
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
  opacity: 0.8;
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
  margin-left: auto;
}
</style>