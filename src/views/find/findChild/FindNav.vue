<template>
  <div class="find-icon">
    <find-icon v-for="item in findIcon" :icon="item">
      <span class="today" v-if="item.url === 'iconrili1'">{{data}}</span>
    </find-icon>
  </div>
</template>

<script>
import FindIcon from './FindIcon'
export default {
  data(){
    return {
      findIcon:[
        {
          text:'每日推荐',
          url:'iconrili1',
        },
        {
          text:'歌单',
          url:'icongedan',
        },
        {
          text:'排行榜',
          url:'iconpaihangbang',
        },
        {
          text:'电台',
          url:'iconyule_yinlediantai',
        }
      ],
      data:null
    }
  },
components:{
  FindIcon
},
mounted(){
  this.getToday()
},
methods:{
  getToday(){
    let today = new Date();
    this.data = today.getDate()
  }
}
}
</script>

<style scoped>
.find-icon{
  width: 100%;
  height:80px;
  margin-top: 10px;
display: flex;
justify-content: space-around;

border-bottom:1px solid #eee;
}
.today{
  width: 18px;
  height: 13px;
  position: absolute;
  top:16px;
  left:11px;
  color: red;
  background-color: #fff;
  line-height: 19px;
}
</style>