<template>
  <div class="find-icon">
    <find-icon
      v-for="(item,index) in findIcon"
      :icon="item"
      :key="index"
      @click.native="iconClick(index)"
    >
      <span class="today" v-if="item.url === 'iconrili1'">{{data}}</span>
    </find-icon>
  </div>
</template>

<script>
import FindIcon from './FindIcon'
export default {
  data() {
    return {
      findIcon: [
        {
          text: '每日推荐',
          url: 'iconrili1'
        },
        {
          text: '歌单',
          url: 'icongedan'
        },
        {
          text: '排行榜',
          url: 'iconpaihangbang'
        },
        {
          text: '电台',
          url: 'iconyule_yinlediantai'
        }
      ],
      data: null
    }
  },
  components: {
    FindIcon
  },
  mounted() {
    this.getToday()
  },
  methods: {
    getToday() {
      let today = new Date()
      this.data = today.getDate()
    },

    iconClick(index) {
      if (index == 1) {
        this.$router.push('/square')
      }
      if (index === 2) {
        this.$router.push('/charts')
      }
      console.log('点击了')
    }
  }
}
</script>

<style scoped>
.find-icon {
  width: 100%;
  height: 80px;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;

  border-bottom: 1px solid #eee;
}
.today {
  width: 20px;
  height: 16px;
  position: absolute;
  top: 14px;
  left: 10px;
  color: red;
  background-color: #fff;
  line-height: 19px;
}
</style>