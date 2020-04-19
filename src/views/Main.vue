<template>
  <div class="main">
    <main-tab-bar class="tab-bar" v-if="!isPath"></main-tab-bar>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import MainTabBar from 'components/common/MainTabBar'

export default {
 data(){
   return {
     isPath:false
   }
 },
  components: {
    
    MainTabBar
  },
  activated(){
    console.log('kk');
    
  },
  mounted(){
    console.log('ll');
    
  },
  watch:{
    $route(to,from){
    this.isPath =  to.path == '/song' 
    console.log(to.path == '/song');
    
  }
  },
  methods:{
    
    

  }

}
</script>

<style>

</style>