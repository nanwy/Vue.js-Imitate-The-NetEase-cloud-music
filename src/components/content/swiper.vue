<template>
  <div class="swiper-box" :class="{swipernoswiping:!isFindSwiper}" @touchstart="hideFindeSwiper">
    <div class="swiper-container swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Find from 'views/find/Find';
  import Home from 'views/home/Home';
    import Swiper1 from '../../../static/swiper.min.js';
  import '../../../static/swiper.min.css';
import {mapGetters,mapMutations} from 'vuex'
  export default {
    components: {
     Find,
     Home
    },
    data() {
      return {
        list: [
          {path: '/home', component: Home},
          {path: '/find', component: Find},

        ],
        
      }
    },
    computed:{
      ...mapGetters({
        isFindSwiper:'IS_FIND_SWIPER'
       
        
      })
    },
    methods:{
      ...mapMutations({
        hideFindeSwiper:"HIDE_FIND_SWIPER"
      })
    },
    mounted() {
      var mySwiper = new Swiper1('.swiper-container', {
       passiveListeners : false,
        // direction : 'vertical',
        touchRatio : 0.9,
//         longSwipesMs : 50,
// longSwipes:true,

        autoplayDisableOnInteraction : false,
        loop:false,
        // 设定初始化时slide的索引
        initialSlide: this.$route.path === '/home' ? 0 : this.$route.path === '/find' ? 1 : 1
      });
      mySwiper.on('slideChange', () => { // 监控滑动后当前页面的索引，将索引发射到导航组件
        // 左右滑动时将当前slide的索引发送到nav组件
        this.$root.eventHub.$emit('slideTab', mySwiper.activeIndex);
      });
      // 接收nav组件传过来的导航按钮索引值，跳转到相应内容区
      this.$root.eventHub.$on('changeTab', (index) => { // 点击导航键跳转相应内容区
        mySwiper.slideTo(index, 0, false);
      });
      console.log(mySwiper);
    }
  }
</script>

<style scoped>

</style>
