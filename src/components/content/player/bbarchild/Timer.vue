<template>
  <div class="timer">
    <span>{{time}}</span>
    <div class="bar" ref="progressBar"  @click="progressClick">
      <div class="line" ref="progress"></div>
      <div class="ignore point" ref="progressButton" @touchstart.prevent="pointTouchStart"
      @touchmove.prevent="pointTouchMove"
      @touchend.prevent="pointTouchEnd"></div>
    </div>
    <span>{{duration | setTime}}</span>
  </div>
  
</template>

<script>
const btn = 5;
export default {
  
  data(){
    return {
      
    }
  },
  props:{
    percent:{
      type:Number
    },
    currentTime:{
     type:Number,
     default:0
   },
   time:{
     type:String
   },
   duration:{
     tyep:Number,
   }
  },
  updated(){
    // console.log(this.percent);
    
  },
  created(){
    this.touch = {}
  },
  watch:{
    percent(val){
      if(val >= 0 && !this.touch.initiated){
        let barWidth = this.$refs.progressBar.clientWidth
        let offsetWidth = val * barWidth
       this._offset(offsetWidth)
        // console.log(barWidth);
        
      }
    }
  },
  methods:{
    pointTouchStart(e){
      this.touch.initiated = true
      this.touch.startX = e.touches[0].pageX
      this.touch.left = this.$refs.progress.clientWidth
    },
    pointTouchMove(e){
      if(!this.touch.initiated){
        return
      }
      let deltaX = e.touches[0].pageX - this.touch.startX
      let offsetWidth =Math.min(this.$refs.progressBar.clientWidth, Math.max(0,this.touch.left + deltaX))
      this._offset(offsetWidth)
    },
    pointTouchEnd(){
      this.touch.initiated = false
      this._triggerPercent()
      
    },
    _triggerPercent(){
      let barWidth = this.$refs.progressBar.clientWidth
      let percent = this.$refs.progress.clientWidth / barWidth
      this.$emit('chengePercent',percent)
    },
    _offset(offsetWidth){
       this.$refs.progress.style.width = `${offsetWidth}px`
        this.$refs.progressButton.style.left = `${offsetWidth}px`
    },
    progressClick(e){
      let offsetWidth = e.offsetX
      this._offset(offsetWidth)
      // console.log(e);
      this._triggerPercent()
    }
  },
  filters:{
    setTime(val){
      let min = parseInt(val / 1000 / 60)
      let sec = parseInt(val / 1000 - min * 60)
      if(min < 10){
        min = '0' + min
      }
      if(sec < 10){
        sec = '0' + sec
      }
      val = `${min}:${sec}`
      return val
      
    }
  }
}
</script>

<style lang='less' scoped>
.timer{
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  height: 20px;
  color: #fff;
  align-items: center;
  width: 85%;
  max-width: 85%;
  margin: 0 auto;
  padding:20px 0;
    span{
      transform: scale(.8);
    }
    .bar{
    position: relative;
    width: 80%;
    margin: 0 15px;
    background-color: #a1a1a1;
    max-width: 80%;
    height: 1px;
      .line{
      width: 0;
      height: 1px;
      background-color: #e4e4e4;
      max-width:calc(100vw - 150px) ;
      }
    }
  
}



.point{
    position: absolute;
    left: 0px;
    top: -3px;
     background-color: #fff;
    border-radius: 50%;
    /* transform: scale(1) !important; */
}
.ignore {
    
    width: 8px;
    height: 8px;
   
}
</style>