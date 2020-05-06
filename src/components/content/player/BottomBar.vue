<template>
<div v-if="playList.length>0">
  <div class="bottom-bar" v-show="!fullScreen"  @click="showFull">
    <div class="front-cover" :style="{backgroundImage:'url(' + currentSong.al.picUrl + ')'}"></div>
    <div class="item-info">
        <div class="name">{{currentSong.name}}</div>
        <span class="songer"  v-for="item in currentSong.ar">{{item.name}}</span>
    </div>
    <div class="control">
      <i @click.stop="togglePlaying" :class="playIcon" class="play iconfont"></i>
      <i class="iconcaidan iconfont"></i>
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
            <span class="songer" v-for="item in currentSong.ar">{{item.name}}</span>
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
    <div class="player-control" :class="{shadow:isShadow}" @touchstart="changeIsShadow" @touchend="changeIsShadow">
      <i class="iconsuiji iconfont"></i>
      <i class="iconshangyishou iconfont"></i>
      <i @click="togglePlaying" :class="playIcon" class="play1 iconfont"></i>
      <i class="iconshangyishou1 iconfont"></i>
      <i class="iconcaidan iconfont"></i>
    </div>
  </div>
  </transition>
  <audio
      :src="currentUrl"
      ref="audio"
      autoplay
     
      preload="auto"
    ></audio>
</div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import Gbnav from 'components/common/Gbnav'
import animations from 'create-keyframe-animation'
import api from 'network/index'
export default {
  data(){
    return {
      id:0,
      currentUrl:'',
      isShadow:false
    }
  },
computed:{
  playIcon(){
    return this.playing? 'iconzantingtingzhi':'iconbofang1'
  },
  ...mapGetters({
    fullScreen:'FULL_SCREEN',
    playList:'PLAY_LIST',
    currentSong:'CURRENT_SONG',
    playing:'PLAYING'
  })
},
components:{
  Gbnav
},
watch:{
  currentSong(val,oldval){
    let albumId = this.$route.params.albumId
    
    this.$nextTick(() => {
    this._getSongPlay(val.id)

    })
  },
  playing(val){
   

       
   this.$nextTick(() => {
     console.log(val);
     
      const audio = this.$refs.audio
        val? audio.play() : audio.pause()
     


    })
  
  },
  
},
methods:{
  hideFull(){
    this.setFullScreen(false)
    
  },
  showFull(){
    this.setFullScreen(true)
    // this._getSongPlay(29753437)
    
  },
  changeIsShadow(){
    this.isShadow = !this.isShadow
  },
  ...mapMutations({
    setFullScreen:'SET_FULL_SCREEN',
    setTogglePlaying:'SET_PLAY_STATE'
  }),
  _getSongPlay(id){
    api.getSongPlay(id).then(res => {
      console.log(res);
      const data = res.data
      if(data.code == 200){
        this.currentUrl = data.data[0].url
        this.toPlay()
      }
    })
  },
  toPlay () {
      this.$refs.audio.play()
      
    },
  enter(el,done){
    const {x,y,scale} = this._getPosAndSclae()
    let animation = {
      0:{
        transform:`translate3d(${x}px,${y}px,0) scale(${scale})`
      },
      60:{
        transform:`translate3d(0,0,0) scale(1.1)`
      },
      100:{
        transform:`translate3d(0,0,0) scale(1)`
      }
    }
    console.log(x,y);
    
    animations.registerAnimation({
      name:'move',
      animation,
      presets:{
        duration:300,
        easing:'Linear'
      }
    })

               animations.runAnimation(this.$refs.round,'move',done)

    console.log(this.$refs.round  );
    
  },
  afterEnter(){
    animations.unregisterAnimation('move')
    this.$refs.round.style.animation = ''
  },
  togglePlaying(){
    this.setTogglePlaying(!this.playing)
    console.log('ssds');
    
  },
  _getPosAndSclae(){
    const targetWidth = 30
    const paddingLeft = 20
    const paddingBottom = 55
    const paddingTop = 100
    const width = window.innerWidth * 0.8
    const scale = targetWidth / width
    const x = -(window.innerWidth/2 - 20 )
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
.play{
  height: 40px;
  width: 40px;
}
.play1{
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  padding:10px
}
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
 transform: scale(.5); 
  transform-origin: left top;
}

.item-info{
  margin-left: 5px;
}

.songer::after {
        content: "/";
      }
.songer:last-child::after {
        content: "";
      }
    
.front-cover{
  
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #000;
  vertical-align: middle;
  background-size: cover  ;
  animation: rotate5 24s linear infinite;
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
    transform: scale(2);
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
.right{
  padding-right: 10px;
}
.center{
  width: 100%;
  height: 400px;
  position: relative;
  z-index: 20;
}
.round{
 display: flex;
    justify-content: center;
    width: 80vw;
    margin: 80px auto;
    height: 0;
    padding-bottom: 80vw;
  border-radius: 50%;
  transform: translate3d(-175px,362px,0);
  /* position: absolute; */
  /* left: 50%;
  top: 20%; */
  /* transform: translate(-50%,-10%); */
  background-size: cover;
  z-index: 20;
  animation: rotate5 4s linear infinite;
}
@keyframes rotate5 {
  0%{
    transform: rotate(0);
  }
  100%{
     transform: rotate(360deg);
  }

}
.wave,
.wave1,
.wave2 {
    position: absolute;
    /* bottom: -30%; */
    left: 10%;
    top: 0%;
    /* transform: translate(-50%,-10%); */
    width: 83vw;
    height: 83vw;
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
.player-control{
  padding: 0 20px;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.player-control i{
  /* background-color: #fff; */
}
.iconfont {
font-family:"iconfont" !important;      
font-size:25px;
font-style:normal;
 color: #fff;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
/* padding: 0 5px; */



}
.shadow{
  text-shadow: 2px 0px 3px #fff,-2px 0px 3px #fff,0px 2px 3px #fff,0px -2px 3px #fff;
}
</style>