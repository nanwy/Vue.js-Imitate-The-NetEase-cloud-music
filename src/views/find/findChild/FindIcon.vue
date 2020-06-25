<template>
  <div class="icon">
    <div class="icon-item">
      <i class="iconfont" :class="icon.url"></i>
      <slot></slot>
    </div>
    <span class="icon-text">{{icon.text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: [Object, Array],
      default() {
        return [{}]
      }
    }
  }
}
</script>

<style scoped>
.icon {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 25px;
  font-style: normal;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-item {
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 50%;
  background-color: red;
  text-align: center;
  line-height: 40px;
}
span {
  display: block;
}
.icon-text {
  font-size: 12px;
  display: block;
}
</style>