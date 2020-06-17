<template>
  <div class="index">
    <tab-bar>
      <div class="nav-left">
        <i class="iconcaidan iconfont" @click="SHOW_LOGIN"></i>
      </div>
      <div class="nav-center">
        <tab-bar-item path="/home" activeColor="pink" @click.native="tabClick(0)">
          <div slot="item-text">我的</div>
        </tab-bar-item>
        <tab-bar-item path="/find" activeColor="black" @click.native="tip();tabClick(1)">
          <div slot="item-text">发现</div>
        </tab-bar-item>
      </div>
      <div class="nav-right">
        <router-link to="/search" class="iconserch iconfont"></router-link>
      </div>
    </tab-bar>
    <top-tip ref="tip" :time="1500">
      <span class="tips">{{tips}}</span>
    </top-tip>
  </div>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
import TopTip from "./index";
import VueRouter from "vue-router";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      tips: "为你推荐更多有趣的内容",
      key: {
        key: 0,
        key1: 2
      },
      navList: [{ name: "我的" }, { name: "发现" }]
    };
  },
  components: {
    TabBar,
    TabBarItem,
    TopTip
  },
  mounted() {
    this.$nextTick(() => {
      // 初始化，保证刷新页面后内容区和导航键一致
      this.initPage();
    });
    // 接收swiper组件发射的index进行导航按钮切换高亮和更新模板地址
    this.$root.eventHub.$on("slideTab", this.slideTab);
  },
  activated() {
    setTimeout(() => {
      this.$refs.tip.showTip();
    }, 2200);
    console.log("sss");
  },
  methods: {
    tip() {
      this.$refs.tip.showTip();
      ++this.key.key;
      ++this.key.key1;
      console.log(this.key1);
      this.setKey(this.key);
    },
    initPage() {
      this.nowIndex =
        this.$route.path == "/home" ? 0 : this.$route.path == "/find" ? 1 : 0;
    },
    tabClick(index) {
      this.nowIndex = index;
      // 点击导航按钮时向swiper组件发射index
      this.$root.eventHub.$emit("changeTab", index);
      console.log(index);
    },
    slideTab(index) {
      this.nowIndex = index;
      let router = new VueRouter();
      let href = index === 0 ? "/home" : index === 1 ? "/find" : "/home";
      // 利用路由的push方法更新路径地址
      this.$router.push(href);
    },
    ...mapMutations({
      setKey: "SET_KEY",
      SHOW_LOGIN: "SHOW_LOGIN"
    })
  }
};
</script>

<style scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 25px;
  font-style: normal;
  color: #000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.index {
  z-index: 20;
}

.title-item {
  color: black;
  font-size: 12px;
}

.tips {
  box-sizing: border-box;
  padding: 0.1rem 0.2rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 0.23rem;
  border-radius: 0.3rem;
  z-index: 999;
}

.nav-left {
  flex: 4;
}

.nav-center {
  flex: 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-right {
  flex: 5;
  display: flex;
  justify-content: flex-end;
}
</style>