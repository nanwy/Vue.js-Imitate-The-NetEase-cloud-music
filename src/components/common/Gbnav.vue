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

.nav{
  width: 100%;
  display: flex;
  height: 40px;
      position: sticky;
        justify-content:space-between;
}
</style>