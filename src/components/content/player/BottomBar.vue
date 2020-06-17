<template>
  <div v-if="playList.length>0">
    <transition name="bar">
      <div class="bottom-bar" v-show="!fullScreen" @click="showFull">
        <div class="front-cover" :class="cdCls" :style="{backgroundImage:'url(' + imgUrl + ')'}"></div>
        <div class="item-info">
          <div class="name">{{currentSong.name}}</div>
          <div class="is-lyric-wrapper" v-show="playing">
            <span class="mini-lyric">{{miniLyric}}</span>
          </div>
          <span class="songer" v-show="!playing" v-for="item in currentSongAr">{{item.name}}</span>
        </div>
        <div class="control">
          <round-circle :radius="32" :percent="percent">
            <i @click.stop="togglePlaying" :class="playIcon" class="play iconfont control-iconfont"></i>
          </round-circle>
        </div>
        <div class="control">
          <i class="iconcaidan iconfont control-iconfont"></i>
        </div>
      </div>
    </transition>
    <transition name="song-detail" @enter="enter" @after-enter="afterEnter">
      <div class="player" :style="{backgroundImage:'url(' + imgUrl + ')'}" v-show="fullScreen">
        <div class="top">
          <gbnav class="nav iconfont" :flag="false" @hideFull="hideFull">
            <div class="left">
              <span class="left-title">{{currentSong.name}}</span>
              <span class="songer1" v-for="item in currentSongAr">{{item.name}}</span>
              <i>></i>
            </div>
            <div class="right">
              <span>
                <i class="iconserch iconfont"></i>
              </span>
            </div>
          </gbnav>
        </div>
        <div class="center">
          <transition name="hide">
            <div
              class="fengmian"
              ref="fengmian"
              :class="{'yinxing':!isLyric,'jianxian':isLyric}"
              @click="changeLyric"
            >
              <div class="round1" ref="round1">
                <div class="round" ref="round" :class="cdCls">
                  <img v-lazy="imgUrl" alt />
                </div>
              </div>
              <div class="wave" :class="cdCls"></div>
              <div class="wave1" :class="cdCls"></div>
              <div class="wave2" :class="cdCls"></div>
            </div>
          </transition>
          <div class="line-wrapper" v-show="isLine && !isLyric" @click="changeLyricLine">
            <i class="line"></i>
            <i class="iconbofang1 iconfont line-arrow"></i>
            <span>{{lineTime}}</span>
          </div>
          <transition name="hide">
            <scroll
              class="lyric content"
              ref="scroll"
              :class="{'yinxing':isLyric,'jianxian':!isLyric}"
              @click.native="changeLyric"
              :data="currentLyric && currentLyric.lines"
              :probeType="3"
              @scroll="contentscroll"
            >
              <div
                class="lyric-wrapper"
                @touchstart.prevent="startTouch"
                @touchmove.prevent="moveLine"
                @touchend.prevent="lyricEnd"
              >
                <div style="height:100px"></div>
                <div>
                  <p
                    ref="lyricLine"
                    class="text"
                    :class="{'active':currentLineNum === index}"
                    v-for="(line,index) in currentLyric.lines"
                  >{{line.txt}}</p>
                </div>
                <div style="height:300px"></div>
              </div>
            </scroll>
          </transition>
        </div>
        <timer
          :duration="allTime"
          :time="setTime(currentTime)"
          :percent="percent"
          @chengePercent="onChengePercent"
        ></timer>
        <div class="player-control">
          <div class="mode">
            <i :class="iconMode" class="iconfont" @click="changeMode"></i>
          </div>

          <div
            v-for="(item,index) in findIcon"
            :icon="item"
            :key="index"
            :class="{shadow:currindex==index}"
            @touchstart="changeIsShadow(index)"
          >
            <i :class="[index==1? playIcon:item]" class="iconfont"></i>
            <!-- {{setTime(updataTime)}} -->
          </div>
        </div>
      </div>
    </transition>
    <audio
      :src="currentUrl"
      ref="audio"
      autoplay
      preload="auto"
      @play="ready"
      @error="error"
      @timeupdate="updateTime"
      @ended="end"
      muted="muted"
    ></audio>
    <top-tip ref="tip" :time="2000">
      <span class="tips">{{tips}}</span>
    </top-tip>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Gbnav from "components/common/Gbnav";
import Timer from "./bbarchild/Timer";
import RoundCircle from "./bbarchild/progress-circle";
import TopTip from "components/common/index";
import animations from "create-keyframe-animation";
import { playMode } from "common/js/config.js";
import { shuffle } from "common/js/util.js";
import Lyric from "lyric-parser";
import Scroll from "components/common/scroll/Scroll";
import api from "network/index";
var timer = null;
export default {
  data() {
    return {
      tips: "手机浏览器打开更流畅!",
      currentUrl: "",
      isShadow: false,
      findIcon: [
        "iconshangyishou",
        "iconzantingtingzhi",
        "iconshangyishou1",
        "iconcaidan"
      ],
      currindex: null,
      songReady: false,
      forIndex: "",
      currentTime: 0,
      allTime: "",
      currentLyric: "",
      isLyric: true,
      currentLineNum: 0,
      onTimeY: 0,
      lineEl: "",
      miniLyric: "",
      isTouchLyric: false,
      lineTime: "",
      currentLine: 0,
      y: 0,
      isLine: false,
      imgUrl: "",
      currentSongDt: 0,
      currentSongAr: [],
      noLyric: false
    };
  },
  computed: {
    percent() {
      return (this.currentTime / this.currentSongDt) * 1000;
    },
    cdCls() {
      return this.playing ? "" : "pause";
    },
    playIcon() {
      return this.playing
        ? "iconzantingtingzhi border-round"
        : "iconbofang1 border-round";
    },
    iconMode() {
      return this.mode === playMode.sequence
        ? "iconliebiaoxunhuan3"
        : this.mode === playMode.loop
        ? "icondanquxunhuan1"
        : "iconsuiji";
    },
    ...mapGetters({
      fullScreen: "FULL_SCREEN",
      playList: "PLAY_LIST",
      currentSong: "CURRENT_SONG",
      playing: "PLAYING",
      currentIndex: "CURRENT_INDEX",
      mode: "MODE",
      sequenceList: "SEQUENCE_LIST"
    })
  },
  components: {
    Gbnav,
    Timer,
    RoundCircle,
    TopTip,
    Scroll
  },
  mounted() {},
  watch: {
    currentSong(val, oldval) {
      console.log(this.playList);
      console.log(val);

      if (val.id === oldval.id) {
        return;
      }

      if (this.currentLyric) {
        this.currentLyric.stop();
      }
      let albumId = this.$route.params.albumId;
      console.log(val);
      console.log(this.currentSong);
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.tip.showTip();
        }, 200);
        this._getSongPlay(val.id);
        if (this.isLyric) {
          this.$refs.scroll.scrollTo(0, 0, 0);
        }
        this.currentSongDt = val.dt ? val.dt : val.duration ? val.duration : 0;
        this.imgUrl = val.album ? val.album.picUrl : val.al.picUrl;
        console.log(this.imgUrl);
        this.currentSongAr = val.ar ? val.ar : val.artists ? val.artists : "";
        this.allTime = this.currentSongDt;
      });
    },
    playing(val) {
      // console.log(this.percent);

      this.$nextTick(() => {
        const audio = this.$refs.audio;
        val ? audio.play() : audio.pause();
        //  console.log(this.$refs.audio.duration);
      });
    },
    y() {
      this.currentLine = Math.floor(
        (-this.y + this.$refs.scroll.$el.offsetHeight / 2 - 100) /
          this.$refs.lyricLine[0].offsetHeight
      );
      this.lineTime = this.setTime(
        this.currentLyric.lines[this.currentLine].time / 1000
      );
      // if(!this.isTouchLyric){
      //   setTimeout(() => {
      //   this.isLine = false
      // }, 4000);
      // }
    }
  },
  methods: {
    hideFull() {
      this.setFullScreen(false);
      console.log(this.currentTime);
    },
    showFull() {
      this.setFullScreen(true);
      // this._getSongPlay(29753437)
    },
    changeLyric() {
      this.isLyric = !this.isLyric;
      console.log(this.isLyric);

      // if(!this.isLyric){
      //   this.onTimeY = this.lineEl.offsetTop
      //   console.log(this.onTimeY);
      //   console.log(this.$refs.scroll.scroll.y,this.onTimeY,this.lineEl.offsetTop);

      //   // return
      // }
      if (this.isLyric) {
        this.$refs.scroll.scrollTo(0, -this.onTimeY, 0);
      }
    },
    //按钮逻辑
    changeIsShadow(index) {
      this.isShadow = !this.isShadow;
      this.forIndex = index;
      this.currindex = index;
      console.log(index);

      if (index === 0) {
        this.prevSong();
      }
      if (index === 1) {
        this.togglePlaying();
        // this.findIcon.splice(2,1,(this.playing? 'iconzantingtingzhi':'iconbofang1'))
        // return this.playing? 'iconzantingtingzhi':'iconbofang1'
      }
      if (index === 2) {
        this.nextSong();
      }
    },
    ready() {
      this.songReady = true;
    },
    error() {
      this.songReady = true;
    },
    updateTime(e) {
      this.currentTime = e.target.currentTime;
      // console.log(e.target.currentTime);
    },
    setTime(interval) {
      interval = interval | 0;
      let min = (interval / 60) | 0;
      let sec = this._pad(interval % 60);
      min = "0" + min;
      // sec = '0' + sec
      return `${min}:${sec}`;
    },
    onChengePercent(percent) {
      let currentTime = this.currentSongDt * percent;
      this.$refs.audio.currentTime = (percent * this.currentSongDt) / 1000;
      // console.log(percent * this.currentSong.dt);
      if (!this.playing) {
        this.setTogglePlaying(!this.playing);
      }
      console.log(currentTime);

      if (this.currentLyric) {
        this.currentLyric.seek(currentTime);
      }
    },
    _pad(num, n = 2) {
      let len = num.toString().length;
      while (len < n) {
        num = "0" + num;
        len++;
      }
      return num;
    },
    // changeIsShadow1(index){
    //   setTimeout(() => {
    //     this.currindex = null
    //   }, 1000);
    //   // if(index === 2){
    //   //   this.setTogglePlaying(!this.playing)
    //   // }
    // },
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN",
      setTogglePlaying: "SET_PLAY_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX",
      setMode: "SET_PLAY_MODE",
      setPlayList: "SET_PLAY_LIST"
    }),
    _getSongPlay(id) {
      api
        .getSuccessSong(id)
        .then(res => {
          if ((res.data.success = true)) {
            api.getSongPlay(id).then(res => {
              console.log(res);
              const data = res.data;
              if (data.code == 200) {
                this._getLyric(id);
                this.currentUrl = data.data[0].url;

                this.toPlay();
              }
            });
          }
        })
        .catch(err => {
          this.songReady = true;
          // if(currindex === )
          console.log(err);
          this.changeIsShadow(this.forIndex);
          this.songReady = true;
        });
    },
    _getLyric(id) {
      api
        .getLyric(id)
        .then(res => {
          // console.log(res);
          const data = res.data;

          if (data.nolyric) {
            // 当前歌曲没有歌词
            this.noLyric = true;
            this.miniLyric = "纯音乐，请欣赏";
            let currentLyric = "[00:00.00]纯音乐，请欣赏";
            this.currentLyric = new Lyric(currentLyric, this.handleLyric);
            if (this.playing) {
              this.currentLyric.play();
            }

            return;
          }
          if (data.uncollected) {
            this.noLyric = true;
            this.miniLyric = "暂时没有歌词";
            let currentLyric = "[00:00.00]纯音乐，请欣赏";
            this.currentLyric = new Lyric(currentLyric, this.handleLyric);
            if (this.playing) {
              this.currentLyric.play();
            }

            return;
          }
          this.noLyric = false;
          this.currentLyric = new Lyric(data.lrc.lyric, this.handleLyric);
          if (this.playing) {
            this.currentLyric.play();
          }

          console.log(this.currentLyric);
        })
        .catch(() => {
          this.currentLyric = null;
          this.miniLyric = "";
          this.currentLineNum = 0;
        });
    },
    handleLyric({ lineNum, txt }) {
      this.currentLineNum = lineNum;
      if (this.isTouchLyric) {
        return;
      }
      if (lineNum > 3) {
        this.lineEl = this.$refs.lyricLine[lineNum - 3];
        this.$refs.scroll.scrollTo(0, -this.lineEl.offsetTop + 100, 1000);
        this.onTimeY = this.lineEl.offsetTop - 100;
        // this.$refs.scroll.refresh()
        // console.log(lineEl.offsetTop);
      }
      this.miniLyric = txt;
    },
    //歌词滑动改变进度
    startTouch() {
      this.isTouchLyric = true;
      console.log(this.$refs.scroll.getScrolly());

      console.log(this.currentLyric.lines[this.currentLine].time);
      clearInterval(timer);
      timer = setTimeout(() => {
        this.isLine = false;
      }, 5000);
    },
    moveLine() {
      this.isLine = true;

      //  this.isTouchLyric = false
    },
    lyricEnd() {
      this.isTouchLyric = false;
      clearInterval(timer);
      timer = setTimeout(() => {
        this.isLine = false;
      }, 5000);
      // console.log(this.$refs.lyricLine[0].offsetHeight);

      // console.log(-this.$refs.scroll.scroll.y+this.$refs.scroll.$el.offsetHeight/1.5);
      // console.log(this.currentLyric.lines[currentLine].time);
    },
    changeLyricLine() {
      // this.isTouchLyric = true
      if (this.isLyric) {
        return;
      }
      if (!this.playing) {
        this.setTogglePlaying(!this.playing);
      }
      // console.log(currentTime);

      this.$refs.audio.currentTime =
        this.currentLyric.lines[this.currentLine].time / 1000;

      if (this.currentLyric) {
        this.currentLyric.seek(this.currentLyric.lines[this.currentLine].time);
      }

      console.log(
        -this.$refs.scroll.scroll.y + this.$refs.scroll.$el.offsetHeight
      );
      setTimeout(() => {
        this.isLine = false;
      }, 2000);
    },
    //上一首
    prevSong() {
      this.$refs.scroll.scrollTo(0, 0, 0);
      this.currentLyric.seek(0);
      if (!this.songReady) {
        return;
      }
      let prev = this.currentIndex - 1;
      if (prev === -1) {
        prev = this.playList.length - 1;
        // console.log(this.playList.length);
      }
      if (!this.playing) {
        this.setTogglePlaying(!this.playing);
      }
      this.setCurrentIndex(prev);
      this.songReady = false;
    },
    end() {
      if (this.mode === playMode.loop) {
        this.loop();
      } else {
        this.nextSong();
      }
    },
    loop() {
      this.$refs.scroll.scrollTo(0, 0, 0);
      this.$refs.audio.currentTime = 0;
      this.$refs.audio.play();
      this.currentLyric.seek(0);
    },
    nextSong() {
      this.$refs.scroll.scrollTo(0, 0, 0);
      this.currentLyric.seek(0);

      if (!this.songReady) {
        return;
      }
      if (this.playList.length === 1) {
        this.loop();
        return;
      } else {
        let index = this.currentIndex + 1;
        if (index === this.playList.length) {
          index = 0;
        }
        this.setCurrentIndex(index);
        if (!this.playing) {
          this.togglePlaying();
        }
      }
      this.songReady = false;
    },
    toPlay() {
      this.$refs.audio.play();
    },
    //动画
    enter(el, done) {
      const { x, y, scale } = this._getPosAndSclae();
      let animation = {
        0: {
          transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
        },
        60: {
          transform: `translate3d(0,0,0) scale(1.1)`
        },
        100: {
          transform: `translate3d(0,0,0) scale(1)`
        }
      };
      console.log(x, y);

      animations.registerAnimation({
        name: "move",
        animation,
        presets: {
          duration: 300,
          easing: "Linear"
        }
      });

      animations.runAnimation(this.$refs.round1, "move", done);

      console.log(this.$refs.round);
    },
    afterEnter() {
      // animations.unregisterAnimation('move')
      // this.$refs.round.style.animation = ''
    },
    togglePlaying() {
      if (!this.songReady) {
        return;
      }
      this.setTogglePlaying(!this.playing);
      console.log("ssds");
      if (this.currentLyric) {
        this.currentLyric.togglePlay();
      }
    },
    //改变模式
    changeMode() {
      let mode = (this.mode + 1) % 3;
      // console.log(this.iconMode);
      this.setMode(mode);
      let list = null;

      if (mode === playMode.random) {
        list = shuffle(this.sequenceList);
        // console.log(this.playList);
        // console.log(list);
      } else {
        list = this.sequenceList;
      }
      this.resetCurrentIndex(list);
      this.setPlayList(list);
      console.log(list);
    },
    contentscroll(position) {
      if (!this.fullScreen) {
        return;
      }
      console.log(this.isLyric);

      console.log(position);
      this.y = position.y;
    },
    resetCurrentIndex(list) {
      let index = list.findIndex(item => {
        return item.id === this.currentSong.id;
      });
      // console.log(this.currentSong.id);
      this.setCurrentIndex(index);
    },
    _getPosAndSclae() {
      const targetWidth = 30;
      const paddingLeft = 20;
      const paddingBottom = 55;
      const paddingTop = 100;
      const width = window.innerWidth * 0.8;
      const scale = targetWidth / width;
      const x = -(window.innerWidth / 2 - 20);
      const y = window.innerHeight - paddingTop - width / 2 - paddingBottom;
      return {
        x,
        y,
        scale
      };
    }
  }
};
</script>

<style lang="less" scoped>
.bar-enter-active,
.bar-leave-active {
  transition: all 0.5s;
  // .center .fengmian{
  //   transition: all 4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
  // }
  // .lyric {
  //   transition: all 4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
  // }
}
.bar-enter,
.bar-leave-to {
  transform: translate3d(0, 30%, 0);
  // .center .fengmian{
  //   transform: translate3d(0, -100px, 0);
  //   opacity: 0;
  // }
  // .lyric {
  //  transform: translate3d(0, -100px, 0);
  // opacity: 0;
  // }
}

.hide-enter-active,
.hide-leave-active {
  transition: all 0.5s;
  // .center .fengmian{
  //   transition: all 4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
  // }
  // .lyric {
  //   transition: all 4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
  // }
}

.hide-enter,
.hide-leave-to {
  opacity: 0;
  transform: translate3d(0, 3%, 0);
  // .center .fengmian{
  //   transform: translate3d(0, -100px, 0);
  //   opacity: 0;
  // }
  // .lyric {
  //  transform: translate3d(0, -100px, 0);
  // opacity: 0;
  // }
}
.song-detail-enter-active,
.song-detail-leave-active {
  transition: all 0.3s cubic-bezier(0.86, 0.18, 0.82, 1.32);
  // .center .fengmian{
  //   transition: all 4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
  // }
  // .lyric {
  //   transition: all 4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
  // }
}

.song-detail-enter,
.song-detail-leave-to {
  opacity: 0;
  transform: translate3d(0, 3%, 0);
  // .center .fengmian{
  //   transform: translate3d(0, -100px, 0);
  //   opacity: 0;
  // }
  // .lyric {
  //  transform: translate3d(0, -100px, 0);
  // opacity: 0;
  // }
}
.border-round {
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 20px;
}
.play {
  /* border: 1px solid #000; */
  /* border-radius: 50%; */
  /* height: 20px; */
  /* width: 20px; */
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  /* padding: 4px 4px 4px 8px; */
  font-size: 12px !important;
  padding: 10px !important;
}
.play1 {
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  padding: 10px;
}

/* .play1:hover  {
         text-shadow: 2px 0px 3px #fff,-2px 0px 3px #fff,0px 2px 3px #fff,0px -2px 3px #fff;
    } */

.bottom-bar {
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

  .item-info {
    margin-left: 5px;
    flex: 1;
    .songer::after {
      content: "/";
    }
    .songer:last-child::after {
      content: "";
    }
    .mini-lyric {
      font-size: 12px;
      font-family: KaiTi;
    }
  }
  .front-cover {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #000;
    vertical-align: middle;
    background-size: cover;
    animation: rotate5 24s linear infinite;
  }
  .control {
    /* width: 50px; */
    /* margin-left: auto; */
    padding-right: 10px;
    display: flex;
    justify-items: center;
    align-items: center;
    position: relative;
    flex: 0 0 30px;
    width: 30px;
    /* padding: 0 10px; */
  }
  .control-iconfont {
    color: #000 !important;
    border: 0 !important;
  }
}
.bottom-bar:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-top: 1px solid rgb(214, 214, 214);
  width: 200%;
  transform: scale(0.5);
  transform-origin: left top;
}
.pause {
  animation-play-state: paused !important;
}
.player {
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
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    margin-left: 3px;
    color: #fff;
    .nav {
      /* padding: 0 10px 0 10px ; */
      z-index: 10;
      .left {
        width: 250px;
        font-size: 12px;
        .left-title {
          width: 230px;
          display: block;
        }

        .songer1::after {
          content: "/";
        }
        .songer1:nth-last-child(2)::after {
          content: "";
        }
        .right {
          padding-right: 10px;
        }
      }
    }
  }
  .line-wrapper {
    background-color: transparent;
    width: 100%;
    height: 20px;
    position: fixed;
    left: 7%;
    top: 310px;
    opacity: 0.5;
    z-index: 50;
    .line {
      width: 80%;
      height: 1px;

      background-color: #fff;
      position: fixed;
      left: 7%;
      top: 320px;
      opacity: 0.5;
    }
    .line-arrow {
      position: absolute;
      top: 12%;
      left: -15px;
      font-size: 15px !important;
    }
    span {
      position: absolute;
      top: 12%;
      right: 35px;
      color: #fff;
    }
  }
  .center {
    width: 100%;
    height: 460px;
    position: relative;
    z-index: 20;
    margin: 40px 0 0 0;
    .content {
      overflow: hidden;
      position: absolute;
      top: 0px;
      bottom: 0;
      left: 0;
      right: 0;
      height: 460px;
      .hei {
        height: 330px;
      }
      .lyric-wrapper {
        // margin: 0 auto;
        // padding-top: 500px;
        .active {
          color: #fff !important;
        }
        .text {
          line-height: 32px;
          text-align: center;
          color: #a9a9a9;
        }
      }
    }
    .yinxing {
      opacity: 0;
    }
    .jianxian {
      animation: opacity1 0.3s;
    }
    @keyframes opacity1 {
      0% {
        opacity: 0;
        transform: translate(0, 10%);
      }
      100% {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
    .round {
      display: flex;
      justify-content: center;
      width: 80vw;
      margin: 0px auto;
      height: 0;
      padding-bottom: 80vw;
      border-radius: 50%;
      transform: translate3d(-175px, 362px, 0);
      /* position: absolute; */
      /* left: 50%;
  top: 20%; */
      /* transform: translate(-50%,-10%); */
      background-size: cover;
      z-index: 20;
      animation: rotate5 4s linear infinite;
      overflow: hidden;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 999;
      }
    }

    @keyframes rotate5 {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .wave,
    .wave1,
    .wave2 {
      position: absolute;
      /* bottom: -30%; */
      left: 8%;
      top: -3%;
      /* transform: translate(-50%,-10%); */
      width: 85vw;
      height: 85vw;
      background-color: rgba(207, 210, 211, 0.5);
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
      }
      100% {
        border-radius: 45%;
        transform: rotate(360deg);
      }
    }

    @keyframes rotate1 {
      50% {
        border-radius: 38%;
        transform: rotate(100deg);
      }
      100% {
        border-radius: 45%;
        transform: rotate(360deg);
      }
    }

    @keyframes rotate2 {
      50% {
        transform: rotate(50deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
.player:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: inherit;
  filter: brightness(0.5) blur(40px);
  z-index: 2;
  transform: scale(2);
}

.player-control {
  padding: 0 20px;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .mode {
    width: 30px;
    height: 30px;
  }
}
.player-control i {
  /* background-color: #fff; */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 25px;
  font-style: normal;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* padding: 0 5px; */
}
.shadow {
  /* text-shadow: 2px 0px 3px #fff,-2px 0px 3px #fff,0px 2px 3px #fff,0px -2px 3px #fff; */
  animation: shadow 1s infinite;
  animation-iteration-count: 1;
}
@keyframes shadow {
  0% {
    text-shadow: 2px 0px 3px #fff, -2px 0px 3px #fff, 0px 2px 3px #fff,
      0px -2px 3px #fff;
  }
  100% {
    text-shadow: 0px 0px 0px #fff, 0px 0px 0px #fff, 0px 0px 0px #fff,
      0px 0px 0px #fff;
  }
}
.tips {
  box-sizing: border-box;
  padding: 0.1rem 0.2rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 0.23rem;
  border-radius: 0.3rem;
}
</style>