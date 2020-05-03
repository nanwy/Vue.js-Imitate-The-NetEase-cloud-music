<template>
<div>
  
    <player v-show="isShow"></player>
    <b-bar-item></b-bar-item>
</div>
</template>

<script>
import Player from './bbarchild/Player'
import BBarItem from './bbarchild/BBarItem'
export default {
  data(){
    return {
      isShow:false
    }
  },
components:{
  Player,
  BBarItem
},
methods:{
  shwoPlayer(){
    this.isShow = true
    console.log('点击');
    
  }
}
}
</script>

<style scoped>



</style>