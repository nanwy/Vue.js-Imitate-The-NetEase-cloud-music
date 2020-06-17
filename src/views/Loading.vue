<template>
  <div class="loading-first" v-if="loading">
    <div class="index-title">音樂的力量</div>
    <div class="foot">网易云音乐</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
      document.getElementsByTagName("body")[0].className = "anim";
    }, 2000);
    console.log("www");

    console.log("xiaohui");
  },
  activated() {},
  mounted() {},
  destroyed() {}
};
</script>

<style>
.anim {
  animation: scale 0.3s ease;
}
@keyframes scale {
  0% {
    transform: scale(2, 2);
  }
  100% {
    transform: scale(1, 1);
  }
}
.loading-first {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: red;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.index-title {
  font-size: 50px;
  transform: translateY(-20%);
  font-style: oblique;
}
.foot {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>