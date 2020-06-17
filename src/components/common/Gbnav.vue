<template>
  <div class="nav">
    <i class="iconback" :class="iconfont" @click="backClick(flag)"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    flag: {
      type: Boolean
    },
    iconfont: {
      type: String
    }
  },
  methods: {
    backClick(flag) {
      if (flag) {
        this.$router.back();
      }
      console.log("后退了");

      this.$emit("hideFull");
    }
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
  display: flex;
  height: 40px;
  position: sticky;
  justify-content: space-between;
}
.iconback {
  padding-left: 5px;
}
</style>