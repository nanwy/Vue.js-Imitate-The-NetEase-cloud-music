<template>
  <div class="player">
    <!-- <div class="top" v-show="!loading" :style="{backgroundImage:'url(' + background + ')'}"> -->
    <div class="top">
      <gbnav class="nav">
        <div class="left">
          <span class="left-title">{{他下个}}</span>
          <span class="description">编辑推荐:{{作者}}</span>
        </div>
        <div class="right">
          <span>
            <i class="iconserch iconfont"></i>
          </span>
        </div>
      </gbnav>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.player {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f45456;
  z-index: 51;
}
</style>