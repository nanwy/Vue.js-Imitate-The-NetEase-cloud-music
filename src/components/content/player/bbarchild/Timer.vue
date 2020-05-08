<template>
  <div class="timer">
    <span>{{time}}</span>
    <div class="bar" ref="progressBar">
      <div class="line" ref="progress"></div>
      <div class="point" ref="progressButton" @click="point"></div>
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
    console.log(this.percent);
    
  },
  watch:{
    percent(val){
      if(val >= 0){
        let barWidth = this.$refs.progressBar.clientWidth
        let offsetWidth = val * barWidth * 1000
        this.$refs.progress.style.width = `${offsetWidth}px`
        this.$refs.progressButton.style.left = `${offsetWidth}px`
        console.log(barWidth);
        
      }
    }
  },
  methods:{
    point(){
      console.log('点击');
      
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

<style scoped>
.timer{
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  height: 20px;
  color: #fff;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  padding:20px 0;
  transform: scale(.9);
}
.bar{
  position: relative;
  width: 80%;
  margin: 0 15px;
  background-color: #aeaeae;
  height: 1px;
}
.line{
  width: 0;
  height: 1px;
  background-color: #e4e4e4;
}
.point{
  position: absolute;
  top: -3px;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
}
</style>