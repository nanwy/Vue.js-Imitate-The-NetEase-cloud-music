<template>
<div>
  <div class="bottom-bar" v-show="!fullScreen" @click='showFull'>
    <div class="front-cover" :style="{backgroundImage:'url(' + currentSong.al.picUrl + ')'}"></div>
    <div class="item-info">
        <div class="name">爱你</div>
        <div class="songer">老戴</div>
    </div>
    <div class="control">
      <div>播放</div>
      <div>菜单</div>
    </div>
  </div>
  <transition name="song-detail"
              @enter='enter'
              @after-enter='afterEnter'
             
              >
  <div class="player" :style="{backgroundImage:'url(' + currentSong.al.picUrl + ')'}" v-show="fullScreen">
    <div class="top">
         
          <gbnav class="nav" :flag='false' @hideFull="hideFull">
          <div class="left">
            <span class="left-title">{{currentSong.name}}</span>
            <span class="description" v-for="item in currentSong.ar">{{item.name}}</span>
          </div>
          <div class="right">
            <span>
              <i class="iconserch iconfont"></i>
            </span>
          </div>

          </gbnav>
    </div>
    <div class="center">
      <div class="fengmian">
        <div class="round" ref="round" :style="{backgroundImage:'url(' + currentSong.al.picUrl + ')'}"></div>
        <div class="wave"></div>
        <div class="wave1"></div>
        <div class="wave2"></div>
      </div>
     
    </div>
  </div>
  </transition>
</div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import Gbnav from 'components/common/Gbnav'
import animations from 'create-keyframe-animation'
export default {
computed:{
  ...mapGetters({
    fullScreen:'FULL_SCREEN',
    playlist:'PLAY_LIST',
    currentSong:'CURRENT_SONG'
  })
},
components:{
  Gbnav
},

methods:{
  hideFull(){
    this.setFullScreen(false)
    
  },
  showFull(){
    this.setFullScreen(true)
    
    
  },
  ...mapMutations({
    setFullScreen:'SET_FULL_SCREEN'
  }),
  enter(el,done){
    const {x,y,scale} = this._getPosAndSclae()
    let animation = {
      0:{
        transform:`translate3d(${x}px,${y}px,0) scale(${scale})`
      },
      60:{
        transform:`translate3d(-50%,-10%,0) scale(1.1)`
      },
      100:{
        transform:`translate3d(-50%,-10%,0) scale(1)`
      }
    }
    animations.registerAnimation({
      name:'move',
      animation,
      presets:{
        duration:300,
        easing:'Linear'
      }
    })
    animations.runAnimation(this.$refs.round,'move',done)
  },
  afterEnter(){
    animations.unregisterAnimation('move')
    // this.$ref.round.style.animation = ''
  },
  leave(el,done){

  },
  leaveEnter(){

  },
  _getPosAndSclae(){
    const targetWidth = 30
    const paddingLeft = 20
    const paddingBottom = 55
    const paddingTop = 100
    const width = window.innerWidth * 0.8
    const scale = targetWidth / width
    const x = -(window.innerWidth - 80 )
    const y = window.innerHeight - paddingTop - width/2 - paddingBottom
    return {
      x,
      y,
      scale
    }
  }
}
}
</script>

<style scoped>
.song-detail-enter-active,.song-detail-leave-active{
  transition: all .3s cubic-bezier(.86,.18,.82,1.32);
}
.song-detail-enter,.song-detail-leave-to{
  opacity: 0;
  transform: translate3d(0,3%,0);
}
.bottom-bar{
  padding: 0 5px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;

}
.bottom-bar:after{
  content: ''; 
  position: absolute; 
  top: 0; 
  left: 0; 
  border-top: 1px solid rgb(214, 214, 214); 
  width: 200%; 
  height: 200%; transform: scale(.5); 
  transform-origin: left top;
}

.item-info{
  margin-left: 5px;
}
.front-cover{
  
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #000;
  vertical-align: middle;
  background-size: cover  ;
}
.control{
  margin-left: auto;
  padding-right: 10px;
  display: flex;
  
}
.player{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f45456;
  z-index: 51;
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
}
.player:after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: brightness(0.5) blur(40px);
    z-index: 2;
    transform: scale(1.5);
}
.top{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  margin-left: 3px;
  color: #fff;
}
.nav{
/* padding: 0 10px 0 10px ; */
z-index: 10;
}
.left{
  width: 250px;
}
.left-title{
  width: 230px;
   display: block;
}
.center{
  width: 100%;
  height: 500px;
  position: relative;
  z-index: 20;
}
.round{
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%,-10%);
  background-size: cover;
  z-index: 20;
}
.wave,
.wave1,
.wave2 {
    position: absolute;
    /* bottom: -30%; */
    left: 16%;
    top: 14%;
    /* transform: translate(-50%,-10%); */
    width: 260px;
    height: 260px;
    background-color: rgba(207, 210, 211, 0.5 5);
    border-radius: 45%;
    animation: rotate 6s linear infinite;
    mix-blend-mode: multiply;
}

.wave1 {
    background-color: rgba(194, 207, 212, 0.64);
    /* transform: translate(-20%, 0) rotate(0deg); */
    animation: rotate1 6s linear -4s infinite;
}

.wave2 {
    background-color: rgba(230, 230, 230, 0.73);
    /* transform: translate(20%, 0) rotate(0deg); */
    animation: rotate2 6s linear -2s infinite;
}

@keyframes rotate {
    50% {
        border-radius: 38%;
        transform: rotate(160deg);
    } 100% {
        border-radius: 45%;
        transform: rotate(360deg);
    }
}

@keyframes rotate1 {
    50% {
        border-radius: 38%;
        transform: rotate(100deg);
    }100% {
        border-radius: 45%;
        transform:rotate(360deg);
    }
}

@keyframes rotate2 {
    50% {
        transform:  rotate(50deg);
    }100% {
        transform: rotate(360deg);
    }
}
</style>