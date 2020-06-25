<template>
  <div id="certify">
    <div class="swiper-container swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banners">
          <img :src="item.coverImgUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from 'network/index'
export default {
  data() {
    return {
      banners: []
    }
  },
  created() {
    this._getSongListinfo()
  },
  methods: {
    _getSongListinfo() {
      api.getSongList().then(res => {
        console.log(res)
        const data = res.data
        if (data.code === 200) {
          this.banners = data.playlists.splice(0, 3)
          console.log(this.banners)
        }
      })
    }
  }
}
</script>

<style scoped>
#certify {
  position: relative;
  width: 420px;
  margin: 0 auto;
  height: 800px;
}

#certify .swiper-container {
  padding-bottom: 60px;
}

#certify .swiper-slide {
  width: 320px;
  height: 208px;
  background: #fff;
  box-shadow: 0 8px 30px #ddd;
}
#certify .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>