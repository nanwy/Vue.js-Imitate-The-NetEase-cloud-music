<template>
  <div class="recommend-item" @click="SongDetail(idx)">
    <div class="item-content">
      <div class="box-shadow" v-if="updataTime"></div>
      <img v-lazy="picUrl" alt />
      <div class="box-shadow1" v-if="updataTime"></div>
      <span class="song-text ignore">{{name}}</span>
      <span class="play-number" v-if="playCount">
        <i class="iconbofang icon"></i>
        {{playCount | setPlayCount}}
      </span>
      <span class="updata-time" v-if="updataTime">{{updataTime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    picUrl: {
      type: String
    },
    name: {
      typr: String
    },
    playCount: {
      type: Number
    },
    songDetailId: {
      type: Number
    },
    idx: {
      type: String
    },
    newSongDeatilId: {
      type: Number
    },
    isSong: {
      type: Boolean
    },
    updataTime: {
      type: String
    }
  },
  filters: {
    setPlayCount(val) {
      if (!val) {
        return ''
      }
      if (val > 10000) {
        val = Math.floor(val / 10000) + '万'
      }
      return val
    }
  },
  methods: {
    SongDetail(idx) {
      if (!idx) {
        if (this.songDetailId) {
          this.$router.push({ name: 'songsdetail', params: { songDetailId: this.songDetailId } })
          return
        }
        if (this.isSong) {
          this.$emit('startPlay')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.recommend-item {
  display: flex;
  width: 94px;
  position: relative;
}
.item-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .box-shadow {
    width: 94px;
    height: 94px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px;
    box-shadow: 0 17px 20px -8px #3030307e inset;
  }
  .box-shadow1 {
    width: 94px;
    height: 94px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px;
    box-shadow: 0 -17px 20px -8px #3030307e inset;
  }
}
.recommend-item .item-content img {
  width: 94px;
  height: 94px;
  border-radius: 5px;
}
.song-text {
  margin-top: 8px;
  margin-bottom: 15px;
  width: 100%;
}
.ignore {
  // padding-top: 1px;
  // height: 23px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
  font-size: 12px;
  height: 24px;
}
.play-number {
  position: absolute;
  color: #fff;
  right: 5px;
  top: 5px;
  font-size: 14px;
}
.updata-time {
  position: absolute;
  color: #fff;
  left: 5px;
  bottom: 40px;
  font-size: 12px;
  transform: scale(0.9, 0.9);
}
.icon {
  font-family: 'iconfont' !important;
  font-size: 12px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>