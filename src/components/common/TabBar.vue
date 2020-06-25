<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {},
  data() {
    return {}
  }
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #fff;
  font-size: 14px;
  /* position: fixed;
    left: 0;
    right: 0;
    top: 0; */
  position: sticky;
  z-index: 13;
  box-shadow: 0px -1px 1px rgba(10, 10, 10, 0.1);
  padding: 0 10px;
  line-height: 40px;
}
.left {
  width: 60px;
}
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>