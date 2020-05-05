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

<style>

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
</style>