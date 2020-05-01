<template>
  <swiper v-if="Object.keys(banners).length !==0" class="find-swiper" @touchstart.native="isFindSwiper">
    <swiper-item v-for="(item,index) in banners" class="find-swiper-item" :key="index">
      <a href="#">
        <img :src="item.pic" alt="" @load="loadImg">
        <span class="title" :style="{backgroundColor:item.titleColor}">{{item.typeTitle}}</span> 
      </a>
      
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
import {mapMutations} from 'vuex'
export default {
  components:{
    Swiper, 
    SwiperItem,
    isLoad:false
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    loadImg(){
      if(!this.isLoad){
        this.$emit('loadImg')
        this.isLoad = true
      }
      
    },
    swiperClick(){
      // this.isFindSwiper = false
      console.log('kk');
       console.log(this.isFindSwiper);
    },
    ...mapMutations({
      isFindSwiper:"IS_FIND_SWIPER"
    })
  }
}
</script>

<style scoped>
.find-swiper{
  margin: 0 auto;
  width: 290px;
  border-radius: 10px;
  overflow: hidden;
  

}

.find-swiper-item{
  position: relative;
  height: 100%;
}
.title{
  position:absolute;
  bottom: 0;
  right: 0;
  padding: 5px 6px;
  color: #fff;
  border-top-left-radius: 8px;
  opacity: .8;
}

</style>