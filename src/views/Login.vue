<template>
  <div>
    <transition name="login">
      <div class="login" v-show="login">
        <div class="login-content">登录</div>
      </div>
    </transition>
    <transition>
      <div class="hide">
        <div class="hide-login" v-show="login" @click="HIDE_LOGIN">ss</div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({ login: "LOGIN" })
  },
  methods: {
    ...mapMutations({
      HIDE_LOGIN: "HIDE_LOGIN"
    })
  }
};
</script>

<style scoped>
.login-enter-active,
.login-leave-active {
  transition: transform linear 0.3s;
}
.login-enter,
.login-leave-to {
  transform: translateX(-6rem);
}
.login {
  position: absolute;
  left: 0px;
  top: 0;
  z-index: 21;
}
.login-content {
  height: 800px;
  width: 300px;
  background-color: #fff;
}
.hide-login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  background: rgba(0, 0, 0, 0.7);
}
</style>