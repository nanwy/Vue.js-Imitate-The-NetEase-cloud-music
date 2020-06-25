<template>
  <div class="tab-bar-item" @click="itemCilck">
    <!-- <img src="../../assets/img/tabbar/Home, homepage, menu.svg" alt="">
    <div>首页</div>-->
    <!-- <div v-if="!isActive" ><slot name = 'item-icon'></slot></div> -->

    <!-- <div v-else ><slot name = 'item-icon-active'></slot></div> -->
    <div :class="{changeFont:isActive,font:isActive}">
      <slot name="item-text"></slot>
    </div>
    <div
      class="cover"
      :class="{active:isLeave,bgc:isTouch}"
      @touchstart="touch"
      @touchend="touchEnd"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      typr: String,
      default: '12px'
    }
  },
  data() {
    return {
      // isActive:true
      isTouch: false,
      isLeave: false
    }
  },
  computed: {
    isActive() {
      // return this.$route.path.indexOf(this.path) !== -1
      return this.$route.path == this.path
    },
    activeStyle() {
      return this.isActive ? { fontSize: this.activeColor } : {}
    }
  },
  methods: {
    itemCilck() {
      this.$router.push(this.path)
    },
    touch() {
      this.isTouch = true
      this.isLeave = false
    },
    touchEnd: function() {
      this.isLeave = true
      this.isTouch = false
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  /* flex:1; */
  position: relative;
  text-align: center;
  /* border-radius: 50%; */
  height: 40px;
  width: 49px;
  line-height: 40px;
  background-color: #fff;
  z-index: 2px;
  /* background-color: #33feff; */
  /* font-size: 14px; */
}

.font {
  font-size: 16px;
}
/* .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  } */
.cover {
  position: absolute;
  top: 0;
  height: 49px;
  width: 49px;
  border-radius: 50%;
  /* background-color:rgba(000, 000, 000, 0.2); */
  /* z-index: -1; */
}
.active {
  transition: 0.5s;
  opacity: 0;
  animation: change 1s ease both 1;
}
.changeFont {
  animation: changeFont 1s ease both 1;
}
@keyframes change {
  0% {
    opacity: 1;
    background-color: rgba(000, 000, 000, 0.1);
  }

  100% {
    opacity: 0;
  }
}
@keyframes changeFont {
  0% {
    transform: scale(14px, 14px);
  }

  100% {
    transform: scale(16px, 16px);
  }
}
.bgc {
  background-color: rgba(000, 000, 000, 0.2);
}
</style>