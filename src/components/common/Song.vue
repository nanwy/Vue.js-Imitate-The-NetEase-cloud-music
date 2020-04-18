<template>
  <div>
    <h2>JJJ</h2>
    <find-song-detail 
    :songDetailId="songDetailId"
    :imgUrl="songDetail.coverImgUrl"
    :title='title'
    :name='songDetail.name'
    :background='background'></find-song-detail>
  </div>
</template>

<script>
import FindSongDetail from 'views/find/findChild/findDetail/FindSongDetail'
import {getSongDetail} from 'network/find'
import rgbaster from 'rgbaster'
export default {
  data(){
    return {
      songDetailId:0,
      songDetail:[],
      title:'',
      background:'red',
      img:require('assets/logo.png')
    }
  },
  activated(){
    let songDetailId = this.$route.params.songDetailId
    this.songDetailId = songDetailId
    console.log(this.songDetailId);
    if(songDetailId){
      this.title = '歌单'
      getSongDetail(this.songDetailId).then(res => {
      const data = res.data
          console.log(res);
          // 查看返回数据的 code 状态，如果是 200 的话进行使用
          if (data.code === 200) {
            // 将请求回来的数据使用，将load 样式关闭
            this.songDetail = data.playlist
           console.log(this.songDetail);
           let result = rgbaster(
      this.songDetail.coverImgUrl,
      {
        ignore: ['rgb(255,255,255)', 'rgb(0,0,0)']
      }
    )
    result.then((res)=>{
      console.log(res[0].color);
      this.background = res[0].color
    })
          }
    })
    
    
     
    }
    
  },
  mounted(){
   
  },
  components:{
    FindSongDetail
  },
  
}
</script>

<style>

</style>