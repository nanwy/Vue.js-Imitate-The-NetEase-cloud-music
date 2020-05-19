<template>
 <div class="marquee-wrap">
  <div class="scroll" ref="scroll">
   <p class="ignore">{{val}}</p>
   <p class="copy" ref="copy"></p>
  </div>
  <p class="getWidth">{{val}}</p>
 </div>
</template>

<script>
export default {
 name: 'marquee',
 props: {
   val:{
     type:String
   },
   isLong:{
     type:Boolean
   }
 },
 data () {
  return {
   timer: null,
  //  val:''
  }
 },
 created () {
  // let timer = setTimeout(() => {
  //  this.$options.methods.move()
  //  clearTimeout(timer)
  // }, 1000)
 },
 mounted () {
  
  // let timer = setTimeout(() => {
  //  this.$options.methods.move()
  //  clearTimeout(timer)
  // }, 1000)
 },
 watch:{
   val(val) {
     if(val == '歌单'){
       
      this.$refs.copy.innerText =''
      // console.log(this.$refs.copy.$el);
      // this.gedan()

  //  clearInterval(this.timer)
  
  clearTimeout(this.timer)
//  console.log(this.timer);
   
    this.$refs.scroll.style.transform= 'translateX(' + 0 + 'px)'
    // console.log(this.$refs.scroll);
    
     }else{
       this.$refs.copy.innerText = this.val
   var timer = setTimeout(() => {
     if(this.isLong){
       return
     }
   this.move()
   console.log('timer');
  //  clearTimeout(timer)
  }, 1000)
   
     }
     
   }
 },
 methods: {
  move () {
   let maxWidth = document.querySelector('.marquee-wrap').clientWidth
   let width = document.querySelector('.getWidth').scrollWidth
   if (width <= maxWidth*0.4) return
   let scroll = document.querySelector('.scroll')
  //  let copy = document.querySelector('.copy')
  //  copy.innerText = this.val
   console.log("this.val");
   
   let distance = 0
   this.timer = setInterval(() => {
    distance -= 1
    if (-distance >= width) {
     distance = 56
    }
    scroll.style.transform = 'translateX(' + distance + 'px)'
   }, 20)
  },
  gedan(){
    // this.$refs.copy.$el.innerText =''
      console.log(this.$refs.copy);
  }
 },
 beforeDestroy () {
  clearInterval(this.timer)
 }
}
</script>

<style scoped>
 .marquee-wrap {
  width: 90%;
  overflow: hidden;
  position: relative;
 }
 .ignore{
  margin-right: 50px;
 }
 p {
  word-break:keep-all;
  white-space: nowrap;
  font-size: 14px;
  font-family: "微软雅黑 Light";
 }
 .scroll {
  display: flex;
 }
 .getWidth {
  word-break:keep-all;
  white-space:nowrap;
  position: absolute;
  opacity: 0;
  top: 0;
 }
</style>