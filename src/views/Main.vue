<template>
  <div class="main">
    <login></login>
    <main-tab-bar class="tab-bar" v-if="!isPath"></main-tab-bar>

    <keep-alive exclude="Song">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import MainTabBar from 'components/common/MainTabBar'

import Login from './Login'
export default {
  name:'Main',
 data(){
   return {
     isPath:false
   }
 },
  components: {
    
    MainTabBar,
    Login
  },
  activated(){
    console.log('kk');
    
  },
  mounted(){
    console.log('ll');
    
  },
  watch:{
    $route(to,from){
    this.isPath =  to.path != '/find' &&  to.path != '/home'
    console.log(to.path == '/songsdetail');
    
  }
  },
  methods:{
    
    

  }

}
</script>

<style>
.main{
  position: relative;
  z-index: 10;
}
</style>