<template>
  <div class="loading" v-if="loading">
    <div class="index-title">音樂的力量</div>
    <div class="foot">网易云音乐</div>
  </div>
</template>

<script>
export default {
  data(){
   return {
     loading:true
     }
  },
  created(){
    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
}
</script>

<style scoped>
.loading{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: red;
  z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
   color: #fff;
}
.index-title{

  font-size: 50px;
   transform: translateY(-20%);
   font-style: oblique;

}
.foot{
position: absolute;
bottom: 10%;
left: 50%;
transform: translate(-50%,-50%);
}
</style>