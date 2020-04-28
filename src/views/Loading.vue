<template>
  <div class="loading" v-if="loading">
    <h2 class="first-loading">555</h2>
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
}
</style>