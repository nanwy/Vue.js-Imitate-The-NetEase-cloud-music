<template>
  <div class="index">
    <tab-bar>
      <div class="nav-left">
        <i class="login"></i>
      </div>
      <div class="nav-center">
        <tab-bar-item path="/home" activeColor='pink'>

          <div slot="item-text">我的</div>
       </tab-bar-item>
       <tab-bar-item path="/find" activeColor='black' @click.native="tip">
         
          <div slot="item-text">发现</div>
       
       </tab-bar-item>
      </div>
      <div class="nav-right">
        <router-link to="/search" >搜索</router-link>
      </div>
    </tab-bar>
     <top-tip ref="tip">
      <span class="tips">{{tips}}</span>
    </top-tip>
  </div>
</template>

<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'
import TopTip from './index'
export default {
  data(){
    return{
      tips: '为你推荐更多有趣的内容'
    }
  },
  components:{
    TabBar,
    TabBarItem,
    TopTip
  },
  mounted () {
    setTimeout(() => {
      this.$refs.tip.showTip()
    },500)
  },
  methods:{
    tip(){
      this.$refs.tip.showTip()
    }
  }
}
</script>

<style scoped>
.index{
  z-index: 20;
}

.title-item{
  
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
  z-index:999;
}

.nav-left{
  flex: 4;
  
}
.login{
  width: 16px;
  height: 1px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  background-color: #333;
  padding: 5px 0;
  display: inline-block;
  background-clip: content-box;
}
.nav-center{
flex: 4;
display: flex;
justify-content:space-around;
align-items: center;
}
.nav-right{
  flex:5;
  display: flex;
  justify-content:flex-end;
}
</style>