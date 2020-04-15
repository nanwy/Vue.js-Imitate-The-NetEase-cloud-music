<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" @click="getWangyi"> -->
    <!-- <nav class="nav-wrapper">
      <div class="nav-left">
        <i class="login"></i>
      </div>
      <ul class="nav-center">
        <router-link tag="div" replace to="/home" :class="{changeFont:isTouch,font:isActive}" @touchstart.native="touch" @touchend.native='touchEnd'>
        <div class="cover" :class="{active:isLeave,bgc:isTouch}" ></div>我的</router-link>
        <router-link tag="div" replace to="/find" :class="{changeFont:isTouch,font:isActive}" @touchstart.native="touch" @touchend.native='touchEnd'>
        <div class="cover" :class="{active:isLeave,bgc:isTouch}" ></div>发现</router-link>
        
        
       
      </ul>
      <div class="nav-right">
        <router-link to="/search" >搜索</router-link>
      </div>
    </nav> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" @click.native="getSong"/> -->
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>


import MainTabBar from './components/common/MainTabBar'

export default {
  
  components: {
    
    MainTabBar
  }

}
</script>

<style scoped>


</style>
