<template>
  <div class="nav">
    <i class="iconback iconfont" @click="backClick(flag)"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    flag:{
      type:Boolean
    }
  },
  methods:{
    backClick(flag){
      if(flag){
        this.$router.back()
      }
      this.$emit('hideFull')
      
    }
  }
}
</script>

<style scoped>

.nav{
  width: 100%;
  display: flex;
  height: 40px;
      position: sticky;
        justify-content:space-between;
}
.iconback{
  padding-left: 5px;
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

</style>