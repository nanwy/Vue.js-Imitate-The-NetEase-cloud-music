<template>
  <div class="play-list">
      <div class="play-title">
        <i>播放</i>
        <span>播放全部</span>
        <span class="total" v-if="many">(共{{many}}首)</span>
        <span class="star" v-if="subscribedCount">+收藏({{subscribedCount}})</span>
      </div>
    </div>
</template>

<script>
export default {
props:{
  many:{
     type:Number
   },
   subscribedCount:{
     type:Number
   },
}
}
</script>

<style scoped>
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