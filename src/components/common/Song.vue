<template>
  <transition name="slide">
  
 
  <div id="song">
    <page-loading  v-show="loading" style="height:5rem"></page-loading>
    <div class="title" :style="{background}" v-show="!loading">
          <gbnav>
          <div class="left">
            <span>{{title}}</span>
            <span class="description">编辑推荐:{{songDetail.description | description1}}</span>
          </div>
          <div class="right">
            <span>
              <i class="iconserch iconfont"></i>
            </span>
            <span>
              <i class="iconcaidan1 iconfont"></i>
            </span>
          </div>
      
          </gbnav>
        </div>
      <song-tab-bar 
    :many="songDetail.trackCount ? songDetail.trackCount : songDetail.album ? songDetail.album.size : 0"
    :subscribedCount="songDetail.subscribedCount" v-show="isTabFixed"
    ref="songtabbar" class="song-tab-bar1"></song-tab-bar>  
     <scroll class="content" ref="scroll"  :probe-type='3' @scroll='contentscroll'>
    
    <find-song-detail 
    :songDetailId="songDetailId"
    :imgUrl="songDetail.coverImgUrl"
    :title='title'
    :name='songDetail.name'
    :background='background'
    :description='songDetail.description'
    :touImg="songDetail.creator ? songDetail.creator.avatarUrl : songDetail.album ? songDetail.album.artist.picUrl:''"
    :nickname="songDetail.creator ? songDetail.creator.nickname : songDetail.album ? songDetail.album.artist.name : ''"
    
    :comment="songDetail.commentCount"
    :share="songDetail.shareCount"
   
    v-show="!loading"></find-song-detail>
    <song-tab-bar 
    :many="songDetail.trackCount ? songDetail.trackCount : songDetail.album ? songDetail.album.size : 0"
    :subscribedCount="songDetail.subscribedCount" v-show="!loading"
    :class="{songtabbar:isTabFixed}"  ref="findsongdetail"></song-tab-bar>
    <div class="music-list" :class="{content2:isTabFixed}">
    <music-list :maxbr="isSq[index]"  v-for="(item,index) in songDetail.tracks"
    :key="index"
    :num="index+1"
    :songName="item.name"
    :arName="item.ar"
    :alName="item.al.name"
    :alia="item.alia[0]"
    :songId="item.id"
    v-show="!loading"
    >
      
    </music-list>
    </div>
     </scroll>
  </div>
 
 </transition>
</template>

<script>
import FindSongDetail from 'views/find/findChild/findDetail/FindSongDetail'
import PageLoading from './pageLoading'
import MusicList from 'components/content/MusicList'
import SongTabBar from 'components/content/SongTabBar'
import {getSongDetail} from 'network/find'
import { mapActions } from 'vuex'
import rgbaster from 'rgbaster'
import Gbnav from 'components/common/Gbnav'
import Scroll from 'components/common/scroll/Scroll'
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
      i:[],
      loading:true,
      isTabFixed:false,
      tabOffsetTop:0,
      isNone:0
    }
  },
  filters:{
    description1(val){
      if(!val){
        return '猜你喜欢'
      }
      
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
            
           console.log(this.songDetail.name);
          //  console.log(this.songPeivileges[0].id);
           
           let result = rgbaster(
      this.songDetail.coverImgUrl,
      {
        ignore: ['rgb(255,255,255)', 'rgb(0,0,0)']
      }
    )
    result.then((res)=>{
    
      this.background = res[0].color
      this.loading = false
    })
          }
    }).catch(error => {
          console.log(error)
        })
    
    
     
    }
    
    
  },

  components:{
    FindSongDetail,
    MusicList,
    PageLoading,
    Scroll,
    Gbnav,
    SongTabBar
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
          return ''
        }
      })
      // console.log(...this.isSq);
      
      
    },
    contentscroll(position){
      console.log(-position.y);
      this.tabOffsetTop = this.$refs.findsongdetail.$el.offsetTop
      console.log(this.$refs.findsongdetail.$el.offsetTop);
      
     if((-position.y) > 100){
       this.title = this.songDetail.name
        this.isTabFixed = (-position.y)> (this.tabOffsetTop - 50)
        this.isNone = (-position.y)> (this.tabOffsetTop)
     }else{
       this.title = '歌单'
     }
    },
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
#song{
   height: 100vh;
    position: relative;
    z-index: 11;
    background-color: #fff;
  
}
.content{
  height: calc(100% - 60px);
  /* background-color: #fff; */

}
.content1{
  margin-top: -50px;
}
.content2{
  margin-top: -60px;
}
.title{
  width: 100%;
  padding: 10px 5px 0 5px;
  display: flex;
  position: absolute;
  color: #fff;
  font-weight: 700;

    z-index:11;
}
.left .description{
  display: block;
  font-size: 12px;
  margin-top: 8px;
  transform: scale(.9);
  width: 230px;
  
  text-overflow: ellipsis;

  font-weight: 100;
    overflow: hidden; 
    -webkit-box-orient: vertical;
    white-space:nowrap;
  color: #efebeb;
  transform-origin: 0 0
}
.songtabbar{
  visibility: hidden;
  /* margin-top: -50px; */
}
.song-tab-bar1{

    width: 100%;

  z-index: 9;
  background-color: #000;
  top: 50px;
  margin-top: 0px;
      height: 59px;
}
.iconfont {
font-family:"iconfont" !important;      
font-size:25px;
font-style:normal;
color: #fff;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
padding: 0 5px;
}
</style>