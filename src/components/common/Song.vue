<template>
  <transition name="slide">
  
  
  <div>
    <find-song-detail 
    :songDetailId="songDetailId"
    :imgUrl="songDetail.coverImgUrl"
    :title='title'
    :name='songDetail.name'
    :background='background'
    :description='songDetail.description'
    :touImg="songDetail.creator ? songDetail.creator.avatarUrl : songDetail.album ? songDetail.album.artist.picUrl:''"
    :nickname="songDetail.creator ? songDetail.creator.nickname : songDetail.album ? songDetail.album.artist.name : ''"
    :many="songDetail.trackCount ? songDetail.trackCount : songDetail.album ? songDetail.album.size : 0"
    :subscribedCount="songDetail.subscribedCount"
    :comment="songDetail.commentCount"
    :share="songDetail.shareCount"></find-song-detail>
    <music-list :maxbr="isSq[index]"  v-for="(item,index) in songDetail.tracks"
    :key="index"
    :num="index+1"
    :songName="item.name"
    :arName="item.ar"
    :alName="item.al.name"
    :alia="item.alia"
    :songId="item.id"
    
    >
      
    </music-list>
  </div>
 </transition>
</template>

<script>
import FindSongDetail from 'views/find/findChild/findDetail/FindSongDetail'
import MusicList from 'components/content/MusicList'
import {getSongDetail} from 'network/find'
import { mapActions } from 'vuex'
import rgbaster from 'rgbaster'
export default {
  data(){
    return {
      songDetailId:0,
      songDetail:[],
      songPeivileges:[],
      title:'',
      background:'',
      img:require('assets/logo.png'),
      isSq:{},
      i:[]
    }
  },
  activated(){
    let songDetailId = this.$route.params.songDetailId
    this.songDetailId = songDetailId
    // console.log(this.songDetailId);
    if(songDetailId){
      this.title = '歌单'
      getSongDetail(this.songDetailId).then(res => {
      const data = res.data
          // console.log(res);
          // 查看返回数据的 code 状态，如果是 200 的话进行使用
          if (data.code === 200) {
            // 将请求回来的数据使用，将load 样式关闭
            this.songDetail = data.playlist
            
            this.songPeivileges = data.privileges
            this._isSQ()
            // console.log(this.isSq);
            
          //  console.log(this.songDetail.tracks[0].id);
          //  console.log(this.songPeivileges[0].id);
           
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
    }).catch(error => {
          console.log(error)
        })
    
    
     
    }
    
    
  },

  components:{
    FindSongDetail,
    MusicList
  },
  methods:{
    _isSQ(){
      // this.songDetail.id ==
    let result = []; 
      // console.log(this.songPeivileges);
      for (let k of this.songPeivileges) {
            // console.log(k.id);
            result.push(k.maxbr);
            // console.log(k.maxbr)   
            //  return k.maxbr > 100000
          }
          // console.log(result);
          
      this.isSq = result.map((item) => {
        if(item > 500000){
          return true
        }else{
          return false
        }
      })
      // console.log(...this.isSq);
      
      
    }
  }
  
}
</script>

<style scoped>
.slide-enter-active,.slide-leave-active{
  transition: all .1s;
}
.slide-enter{
  transform: translate3d(0,100%,0)
}
.slide-leave-to{
  opacity: .1;
}
</style>