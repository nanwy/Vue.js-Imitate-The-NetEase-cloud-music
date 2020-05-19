<template>
  <transition name="slide">
  
 
  <div id="song">
    
    <div class="title" v-show="!loading" :style="{backgroundImage:'url(' + background + ')'}">
          <gbnav class="nav iconfont" :flag="true" >
          <div class="left">
            <span class="left-title">
              <marrquee :val="title"></marrquee>
            </span>
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
      class="song-tab-bar1" ></song-tab-bar>  
     <scroll class="content" :class="{'height5':isPlayList}" ref="scroll"  :probe-type='3' @scroll='contentscroll'>
    <page-loading  v-if="loading" style="height:5rem"></page-loading>
    <find-song-detail 
    :songDetailId="songDetailId"
    :imgUrl="songDetail.coverImgUrl"
    :title='title'
    :name='songDetail.name'
    :backgroundImage='songDetail.coverImgUrl'
    :description='songDetail.description'
    :touImg="songDetail.creator ? songDetail.creator.avatarUrl : songDetail.album ? songDetail.album.artist.picUrl:''"
    :nickname="songDetail.creator ? songDetail.creator.nickname : songDetail.album ? songDetail.album.artist.name : ''"
    
    :comment="songDetail.commentCount"
    :share="songDetail.shareCount"
    :playCount="songDetail.playCount"
    
    v-show="!loading"></find-song-detail>
    <song-tab-bar 
    @startAllSong='startPlayAll(0)'
    :many="songDetail.trackCount ? songDetail.trackCount : songDetail.album ? songDetail.album.size : 0"
    :subscribedCount="songDetail.subscribedCount" v-show="!loading"
    :class="{songtabbar:isTabFixed}"  ref="findsongdetail" ></song-tab-bar>
    <div class="music-list">
    <music-list :maxbr="isSq[index]"  v-for="(item,index) in songDetail.tracks"
    :key="index"
    :num="index+1"
    :songName="item.name"
    :arName="item.ar"
    :alName="item.al.name"
    :alia="item.alia[0]"
    :songId="item.id"
    @startPlay="startPlayAll(index)"
    v-show="!loading"
    >
      
    </music-list>
    
    </div>
     </scroll>
     <div class="mask" v-if="showModal" @click="showModal=false"></div>
    <div class="pop" v-if="showModal">
        <!-- <button @click="showModal=false" class="btn">点击出现弹框</button> -->
        <img src="~assets/img/582513839.jpg" alt="">
        <p>抱歉,该资源暂无版权,我们正在努力争取中</p>
    </div>
  </div>
 
 </transition>
</template>

<script>
import FindSongDetail from 'views/find/findChild/findDetail/FindSongDetail'
import PageLoading from './pageLoading'
import MusicList from 'components/content/MusicList'
import SongTabBar from 'components/content/SongTabBar'
import marrquee from './marrquee'
// import {getSongDetail} from 'network/find'
import { mapActions,mapGetters, } from 'vuex'
import rgbaster from 'rgbaster'
import Gbnav from 'components/common/Gbnav'
import Scroll from 'components/common/scroll/Scroll'
import api from 'network/index'
let that;
export default {
  name:'Song',
  data(){
    return {
      songDetailId:0,
      songDetail:[],
      songPeivileges:[],
      title:'',
      background:'',
      background1:'',
      img:require('assets/logo.png'),
      isSq:{},
      i:[],
      loading:true,
      isTabFixed:false,
      tabOffsetTop:0,
      isNone:0,
      newSongDeatilId:0,
      no:{},
      showModal:false
    }
  },
  beforeCreate() {
    that = this
  },
  filters:{
    description1(val){
      if(!val){
        return '猜你喜欢'
      }
      return  that.songDetail.description 
    }
  },
  computed:{
    ...mapGetters({
      fullScreen:'FULL_SCREEN',
      currentIndex:'CURRENT_INDEX',
      playList:'PLAY_LIST',
    }),
    isPlayList(){
      return this.playList.length? true : false
    }
  },
  mounted(){

          //   setTimeout(() => {
          //         this.$refs.scroll.scrollTo(0,50,100)
          //         console.log('ss');
                  
          //   }, 2000);

          //  console.log(this.$refs.scroll.scrollTo);
           
      
    
  },
 
  created(){
    // this.$refs.scroll.scrollTo(0,50,5000)
    let songDetailId = this.$route.params.songDetailId
    let newSongDeatilId = this.$route.params.newSongDeatilId
     this.songDetailId = songDetailId
      this.newSongDeatilId = newSongDeatilId
    // console.log(this.songDetailId);
    // if(songDetailId){
    //   this.title = '歌单'
    //   getSongDetail(this.songDetailId).then(res => {
    //   const data = res.data
    //       // console.log(res);
    //       // 查看返回数据的 code 状态，如果是 200 的话进行使用
    //       if (data.code === 200) {
    //         // 将请求回来的数据使用，将load 样式关闭
    //         this.songDetail = data.playlist
            
    //         this.songPeivileges = data.privileges
    //         this._isSQ()
    //         // console.log(this.isSq);
            
    //       //  console.log(this.songDetail.name);
    //       //  console.log(this.songPeivileges[0].id);
           
    //        let result = rgbaster(
    //   this.songDetail.coverImgUrl,
    //   {
    //     ignore: ['rgb(255,255,255)', 'rgb(0,0,0)']
    //   }
    // )
    // result.then((res)=>{
    
    //   this.background = res[0].color
    //   this.loading = false
    // })
    //       }
    // }).catch(error => {
    //       console.log(error)
    //     })
    
    // if (!songDetailId) {
    //   this.$router.push('/find')
    //   return
    // }
     
    // }
    if(songDetailId){
      
      console.log(this.songDetailId);
      
      this.title = '歌单'
        // this.$refs.scroll.scrollTo(0,50,0)
        // http://localhost:3000/api/playlist/detail?id=4920881606
     api.getSongDetail(this.songDetailId)
        // 请求成功后返回数据
        .then(res => {
          // 接受数据
          const data = res.data
          console.log(res);
          // 查看返回数据的 code 状态，如果是 200 的话进行使用
          if (data.code === 200) {
            // 将请求回来的数据使用，将load 样式关闭
            this.songDetail = data.playlist
            this.songPeivileges = data.privileges
            this._isSQ()
            this.loading = false
            // console.log(this.isSq);
           console.log(this.no);
          //  console.log(this.songDetail.name);
          //  console.log(this.songPeivileges[0].id);
         
          }
    }).catch(error => {
          console.log(error)
        })     
    }
    
    // if(songDetailId){
    //   this.title = '歌单'
    // api.albumDetailFn(this.songDetailId)
    //     // 请求成功后返回数据
    //     .then(res => {
    //       // 接受数据
    //       const data = res.data
    //       console.log(res);
    //       // 查看返回数据的 code 状态，如果是 200 的话进行使用
    //       if (data.code === 200) {
    //         // 将请求回来的数据使用，将load 样式关闭
    //         this.songDetail = data.playlist
    //         this.songPeivileges = data.privileges
    //         this._isSQ()
    //         this.load = false
    //          let result = rgbaster(
    //   this.songDetail.coverImgUrl,
    //   {
    //     ignore: ['rgb(255,255,255)', 'rgb(0,0,0)']
    //   }
    // )
    // result.then((res)=>{
    
    //   this.background = res[0].color
    //   this.loading = false
    // })
    //       }
    // }).catch(error => {
    //       console.log(error)
    //     })
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // } 
  },

  components:{
    FindSongDetail,
    MusicList,
    PageLoading,
    Scroll,
    Gbnav,
    SongTabBar,
    marrquee
  },
  methods:{
    contentscroll(position){
      // console.log(-position.y);
      this.tabOffsetTop = this.$refs.findsongdetail.$el.offsetTop
      // console.log(this.$refs.findsongdetail.$el.offsetTop);
      
     if((-position.y) > 100){
       this.title = this.songDetail.name
        this.isTabFixed = (-position.y + 50)> this.tabOffsetTop
        this.background = this.songDetail.coverImgUrl
        // console.log(this.background);
        console.log(this.title);
        
        
        // this.isNone = (-position.y + 110)> (this.tabOffsetTop)
     }else{
       this.title = '歌单'
       this.background = 'transparent'
        console.log(this.title);
        
     }
    },

    _isSQ(){
      // this.songDetail.id ==
    let result = []; 
    let nobanquan = [];
      // console.log(this.songPeivileges);
      for (let k of this.songPeivileges) {
            // console.log(k.id);
            result.push(k.maxbr);
            nobanquan.push(k.st)
            // console.log(k.maxbr)   
            //  return k.maxbr > 100000
          }
          // console.log(result);
      this.no = nobanquan
      this.isSq = result.map((item) => {
        if(item > 500000){
          return true
        }else{
          return false
        }
      })
      // console.log(...this.isSq);
      
      
    },
    startPlayAll(index){
      if(this.no[index] === (-200)){
        // console.log('暂无版权');
        this.showModal=true
        return
      }
      console.log(this.songDetail.tracks);
      
      //  console.log('kjkj')
      this.setSongAll({
        list:this.songDetail.tracks,

        index
        
      })
      console.log(this.$store.state.currentIndex);
      
    },
    ...mapActions(['setSongAll'])
    
  }
  
}
</script>

<style scoped>
.mask {
  
  background-color: rgba(42, 42, 42, 0.9);
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
}
.pop {
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%,-50%);
  height:250px;
  z-index: 51;
}
.pop p{
  width: 80%;
  line-height: 20px;
  margin: 0 auto;
}
.pop img{
  width: 100%;
  height: 158px;
}
.btn {
  position: absolute;
  top: 50px;
  background-color: red;
  border-radius: 4px;
  border: 1px solid blue;
  padding: 4px 12px;
  width: 50px;
  height: 40px;
}
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
  /* height: calc(100% - 60px); */
  /* background-color: #fff; */
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0px;
  left: 0;
  right: 0;
}
.height5{
  bottom: 55px;
}
.content1{
  margin-top: -50px;
}
.content2{
  /* margin-top: -60px; */
}
.title{
  width: 100%;
  padding-top: 10px;
  /* padding-left: 5px; */
  display: flex;
  position: absolute;
  top: 0px;
  left: 0;
  color: #fff;
  font-weight: 700;
  
   background-position:0 75%;
  background-size: cover;
    z-index:11;
  align-items: center ;
  justify-content: center;
  overflow: hidden;
}
.title:after{
    content: "";
    width:100%;
    height:150%;
    position: absolute;
    left:0;
    top:-10px;
    background: inherit;
    filter: brightness(0.5) blur(8px);
    z-index: 2;
    /* transform: scale(1.1,1.1); */
    transform-origin: 0,0;
}
.nav{
  z-index: 11;
  /* padding: 0 0 0 10px ; */
}
.left-title{
  width: 230px;
   display: block;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow: hidden; 
    -webkit-box-orient: vertical;

}
.left{
  overflow: hidden;
}
.left .description{
  display: block;
  font-size: 12px;
  height: 25px;
  padding-top: 5px;
  transform: scale(.9);
  width: 230px;
  position: absolute;
  text-overflow: ellipsis;
  line-height: 25px;
  font-weight: 100;
    overflow: hidden; 
    -webkit-box-orient: vertical;
    white-space:nowrap;
  color: #fff;
  transform-origin: 0 0;
  /* animation: move 10s infinite; */
}

.songtabbar{
  visibility: hidden; 
   /* margin-top: -50px; */
  /* width: 100%;
  position: fixed;
  top: 50px; */
}
.song-tab-bar1{

    width: 100%;
  position: relative  ;
  z-index: 20;
  background-color: #fff;
  top: 50px;
  /* padding-top: 50px; */
  margin-top: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
      /* height: 59px; */
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