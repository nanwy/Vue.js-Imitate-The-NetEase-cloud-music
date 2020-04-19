<template>
  <div class="nav">
    <i class="iconback iconfont"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.iconfont {
font-family:"iconfont" !important;      
font-size:25px;
font-style:normal;
color: #000;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
.nav{
  display: flex;
  height: 50px;

}
</style>