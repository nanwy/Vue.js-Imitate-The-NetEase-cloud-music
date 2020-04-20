<template>
  <div class="nav">
    <i class="iconback iconfont" @click="backClick"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods:{
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style>
.iconfont {
font-family:"iconfont" !important;      
font-size:25px;
font-style:normal;
color: #fff;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
.nav{
  display: flex;
  height: 50px;

}
</style>