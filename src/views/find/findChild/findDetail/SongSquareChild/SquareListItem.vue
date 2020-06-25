<template>
  <div class="swiper-slide slidepage">
    <div class="recommends-content">
      <recommend-songs-item
        v-for="(item,index) in Songs"
        :picUrl="item.coverImgUrl"
        :name="item.name"
        :playCount="item.playCount"
        :songDetailId="item.id"
        :key="index"
      ></recommend-songs-item>
    </div>
  </div>
</template>

<script>
import RecommendSongsItem from '../../RecommendSongsItem'
export default {
  props: {
    Songs: {
      type: Array
    }
  },

  components: {
    RecommendSongsItem
  }
}
</script>

<style scoped>
.recommends-content {
  margin-top: 20px;
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 90px auto 0;
}
</style>