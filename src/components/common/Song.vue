<template>
 
  <div>
    
    <find-song-detail 
    :songDetailId="songDetailId"
    :imgUrl="songDetail.coverImgUrl"
    :title='title'
    :name='songDetail.name'
    :background='background'
    :description='songDetail.description'
    :touImg="songDetail.creator ? songDetail.creator.avatarUrl : songDetail.album ? songDetail.album.artist.picUrl:''"
    :nickname="songDetail.creator ? songDetail.creator.nickname : songDetail.album ? songDetail.album.artist.name : ''"></find-song-detail>
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
      background:'',
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
           console.log(this.songDetail.creator.avatarUrl);
           
           let result = rgbaster(
      this.songDetail.coverImgUrl,
      {
        ignore: ['rgb(255,255,255)', 'rgb(0,0,0)']
      }
    )
    result.then((res)=>{
    
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

<style scoped>
.slide-enter-active,.slide-leave-active{
  transition: all .3s;
}
.slide-enter,.slide-leave-to{
  transform: translate3d(100%,0,0);
}
</style>