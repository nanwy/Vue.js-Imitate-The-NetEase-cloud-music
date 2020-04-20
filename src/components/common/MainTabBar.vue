<template>
  <div class="index">
    <tab-bar>
      <div class="nav-left">
        <i class="iconcaidan iconfont"  ></i>
      </div>
      <div class="nav-center">
        <tab-bar-item path="/home" activeColor='pink'>

          <div slot="item-text">我的</div>
       </tab-bar-item>
       <tab-bar-item path="/find" activeColor='black' @click.native="tip" >
         
          <div slot="item-text">发现</div>
       
       </tab-bar-item>
      </div>
      <div class="nav-right">
        <router-link to="/search" class="iconserch iconfont"></router-link>
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

import {mapMutations} from 'vuex'
export default {
  data(){
    return{
      tips: '为你推荐更多有趣的内容',
      key:{
        key:0,
        key1:2
      },
      
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
      ++this.key.key
      ++this.key.key1
      console.log(this.key1);
      this.setKey(this.key)
      
    },
    ...mapMutations({
      setKey:'SET_KEY'
    })
  }
}
</script>

<style scoped>
.iconfont {
font-family:"iconfont" !important;      
font-size:25px;
font-style:normal;
color: #000;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
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