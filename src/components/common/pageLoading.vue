<!--
 * @Author: 李浩栋
 * @Begin: 2019-08-31 10:19:23
 * @Update: 2019-10-24 08:50:52
 * @Update log: 展示页面加载动画
 -->
<template>
  <div class="container">
    <div class="page-loading">
      <span class="span"></span>
      <span class="span"></span>
      <span class="span"></span>
      <span class="span"></span>
    </div>努力加载中...
  </div>
</template>

<script>
export default {
  name: 'pageLoading'
}
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  line-height: 20px;
  z-index: 999;
}
.page-loading {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 30px;
  margin-right: 5px;

  }
  .span {
    width: 3px;
    height: 10px;
    background-color: red;}

  .span:nth-of-type(1) {
    animation: grow 1s -0.45s ease-in-out infinite;
  }

  .span:nth-of-type(2) {
    animation: grow 1s -0.3s ease-in-out infinite;
  }

  .span:nth-of-type(3) {
    animation: grow 1s -0.15s ease-in-out infinite;
  }

  .span:nth-of-type(4) {
    animation: grow 1s ease-in-out infinite;
  }

  @keyframes grow {
    0%,
    100% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(2);
    }
  }

</style>
