<template>
<div id="songs-square">
  <div id="top">
  <gbnav class="iconfont" :flag='true'>
      <span>歌单广场</span>
  </gbnav>
  <div class="swiper-container" id="nav">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <span style="color:rgba(194,12,12,1);">推荐</span></div>
      <div class="swiper-slide">
        <span>官方</span></div>
      <div class="swiper-slide">
        <span>精品</span></div>
      <div class="swiper-slide">
        <span>华语</span></div>
      <div class="swiper-slide">
        <span>流行</span></div>
      <div class="swiper-slide">
        <span>电子</span></div>
      <div class="swiper-slide">
        <span>古风</span></div>
      <div class="swiper-slide">
        <span>民谣</span></div>
      <div class="bar">
        <div class="color"></div>
      </div>
    </div>
  </div>
</div>
<page-loading  v-if="loading" style="height:5rem"></page-loading>
<scroll class="content" ref="scroll" @pullingUp ="loadMore" :useTransition = false>
<div class="swiper-container" id="page">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      
        <!-- <scroll class="content" ref="scroll1"  :probe-type='3' @pullingUp ="loadMore"> -->
      <!-- <div class="swiper-container scroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide slidescroll"> -->
            <div id="certify">
               <div class="swiper-container swiper1">
                <div class="swiper-wrapper" >
                  <div class="swiper-slide" v-for="item in banners"><img :src="item.coverImgUrl" /></div>
                </div>
              </div>
              
            </div>
            <div class="recommends-content">
            <recommend-songs-item 
            v-for='(item,index) in showSongs' :picUrl="item.coverImgUrl" 
            :name="item.name" 
            :playCount="item.playCount" 
            :songDetailId='item.id'
            :key="index"></recommend-songs-item>
            </div>
      <!-- </scroll> -->
        <!-- </scroll> -->
          </div> 
        <!-- </div>
      </div>
    </div> -->
  
    
      
           <square-list-item v-for="(item,index) in Songs" :Songs="item.list" :key="index"></square-list-item>
           <!-- <square-list-item :Songs="Songs['官方'].list"></square-list-item>`
           <square-list-item :Songs="Songs['华语'].list"></square-list-item>
           <square-list-item :Songs="Songs['流行'].list"></square-list-item>

           <square-list-item :Songs="Songs['电子'].list"></square-list-item>
           <square-list-item :Songs="Songs['古风'].list"></square-list-item>
           <square-list-item :Songs="Songs['民谣'].list"></square-list-item> -->
           <!-- <square-list-item :Songs="showSongs"></square-list-item> -->
           <!-- <square-list-item :Songs="folkSongs"></square-list-item>
           <square-list-item :Songs="folkSongs"></square-list-item>
           <square-list-item :Songs="folkSongs"></square-list-item>
           <square-list-item :Songs="folkSongs"></square-list-item>
           <square-list-item :Songs="folkSongs"></square-list-item>
           <square-list-item :Songs="folkSongs"></square-list-item>
           <square-list-item :Songs="folkSongs"></square-list-item> -->
           <!-- <square-list-item :Songs="folkSongs"></square-list-item> -->
     
    
  </div>
</div>
</scroll>
</div>
</template>

<script>
  import Swiper from 'swiper'; 
  import 'swiper/css/swiper.min.css'
  import 'swiper/js/swiper.min.js'
  import SongBanners from './SquareBanners'
  import api from 'network/index'
  import RecommendSongsItem from '../RecommendSongsItem'
  import SquareListItem from './SongSquareChild/SquareListItem'
  import Gbnav from 'components/common/Gbnav'
  import Scroll from 'components/common/scroll/Scroll'
  import PageLoading from 'components/common/pageLoading'
  const Find = ()=>import("views/find/Find");
  
export default {
  
    data() {
    let thats = this;
    return {
      Songs:{
      '全部':{page:18,list:[]},
      '官方':{page:18,list:[]},
      '华语':{page:18,list:[]},
      '流行':{page:18,list:[]},
      '电子':{page:18,list:[]},
      '古风':{page:18,list:[]},
      '民谣':{page:18,list:[]},

      },
      banners:[],
      recommendSongs:[],
      recommendsongs:[],
      authoritySongs:[],
      chineseSongs:[],
      popularSongs:[],
      electronSongs:[],
      antiquitiesSongs:[],
      folkSongs:[],
      loading:true,
      page:0,
      currentCat:'',
      currentType:'全部',
      isLoad:false
    }
  },
  computed:{
    showSongs(){
      return this.Songs[this.currentType].list
    }
  },
  created(){
    this._getSongListinfo()
    this._loadMore('官方')
  },
methods:{
  _getSongListinfo(cat){
    api.getSongList(cat).then(res => {
      console.log(res);
      const data = res.data
      if(data.code === 200){
        this.banners = data.playlists.splice(0,3)
        this.Songs['全部'].list = data.playlists
        this.loading = false
        console.log(this.banners);
        // console.log(this.authoritySongs);
         setTimeout(() => {
           this.bannersc()
          //  this.scroll1()
         }, 0);
      }
    })
  },
  toDetail(){

  },
  async _getOtherSongListinfo(limit,order,cat,songs){
    const res = await api.getSongList(limit,order,cat)
      console.log(res);
      this.loading = false
      // setTimeout(() => {
      //     //  this.bannersc()
      //     //  this.scroll1()
      //    }, 0);
      // this.$refs.scroll.refresh()
      return res.data.playlists
      // const data = res.data
      // if(data.code === 200){
      //   console.log(songs,this.authoritySongs);
        
          
        
        
        // console.log(this.banners);
      // }
       
      //      songs = res.data.playlists
         
      
      // console.log(songs,this.authoritySongs);
    // songs = songs
  },
  bannersc(){
    let that = this
    let startX
    var certifySwiper = new Swiper('.swiper1', {
      // observer:true,
      // observeParents:true,
			watchSlidesProgress: true,
			slidesPerView: 'auto',
			centeredSlides: true,
			loop: true, 
      loopedSlides: 5,
      loopAdditionalSlides:3,
      
			autoplay: {
      delay: 3000,//1秒切换一次
      disableOnInteraction: false,
      },
			
			on: {
        touchStart(e){
          startX = e.touches[0].pageX
        },
				progress: function (progress) {
					for (let i = 0; i < this.slides.length; i++) {
						var slide = this.slides.eq(i);
						var slideProgress = this.slides[i].progress;
						var modify = 1;
						if (Math.abs(slideProgress) > 1) {
							modify = (Math.abs(slideProgress) - 1)  + 1;
						}
						let translate = slideProgress * modify *80 + 'px';
						let scale = 1 - Math.abs(slideProgress) / 5;
            let zIndex = 1-Math.abs(Math.round(1 * slideProgress));
            let opacity = scale
						slide.transform('translateX(' + translate + ') scale(' + scale + ')');
						slide.css('zIndex', zIndex);
						slide.css('opacity', opacity);
						if (Math.abs(slideProgress) > 1.5) {
						    slide.css('opacity', 0);
						}
					}
				},
				setTransition: function (transition) {
					for (var i = 0; i < this.slides.length; i++) {
						var slide = this.slides.eq(i)
						slide.transition(transition);
					}
 
        },
        
        click(e){
          // console.log(this.activeIndex--,startX);

          if(startX > 300){
          this.slideNext();
          return
          }else if(startX < 130){
          this.slidePrev();
          return
          }
          let index = this.activeIndex % 3
          that.$router.push({name:'songsdetail',params:{songDetailId:that.banners[index].id}}) 
         
        }
			}
 
    })
  },
  loadMore(){
    console.log('跟多');
    this._loadMore(this.currentType)
    // this.$refs.scroll.refresh()
    // this.isLoad = false
  },
  _loadMore(type){
   
    const page = this.Songs[type].page + 18
    // // console.log('跟g多');
    // if(this.isLoad){
    //   return
    // }
    api.getSongList(18,undefined,type,page).then(res => {
      console.log(res);
      this.Songs[type].list.push(...res.data.playlists)
      this.Songs[type].page +=27
      this.$refs.scroll.finishPullUp()
      this.$refs.scroll.refresh()
      this.isLoad = true
    })
  },
  
},
components:{
  SongBanners,
  RecommendSongsItem,
  Gbnav,
  Scroll,
  PageLoading,
  SquareListItem
},
mounted(){
  // this.$nextTick(() => {
  //         this.scroll1()
  //       })
  const self = this
  let thats = this
  let barwidth =36 //导航粉色条的长度px
  let tSpeed = 800 //切换速度300ms
  let navSum
  let clientWidth 
  let bar
  let navSlideWidth 
  let navWidth 
  let topBar
  var navSwiper = new Swiper('#nav', {
  	slidesPerView: 6,
  	freeMode: true,
  	on: {
  		init: function() {
         bar = document.querySelectorAll('.bar')[0]
  			navSlideWidth = bar.offsetWidth; //导航字数需要统一,每个导航宽度一致
  			// let bar = this.$el.find('.bar')
        
  			bar.style.width = navSlideWidth
  			bar.style.transition = tSpeed
  			navSum = this.slides[this.slides.length - 1].offsetLeft //最后一个slide的位置
        console.log(navSum);
        
        let blockWidth = this.slides[this.slides.length - 2].offsetLeft
        
        
  			clientWidth = parseInt(this.$wrapperEl.css('width')) //Nav的可视宽度
  			navWidth = 414
  			// for (let i = 0; i < this.slides.length; i++) {
  			// 	navWidth += parseInt(this.slides.eq(i).offsetWidth)
  			// }
        
        
  			topBar = document.querySelectorAll('#top')[0] //页头

  		},
     

  	},
  });
  
  let startX,startY,endX,endY
  let end
  let color
  let progress
  let page = document.querySelectorAll('#page')[0]
      var pageSwiper = new Swiper('#page', {
  	watchSlidesProgress: true,
    resistanceRatio: 0,
    direction:'horizontal',
    observer:true,
observerParents:true,
lazy: {
    loadPrevNext: true,
  },
    // lazyLoading:true,
    // autoHeight: true,
    // preloadImages:false,
  //   lazy: {
  //   loadOnTransitionStart: true,
  // },
  	on: {
   

      touchMove: function(e) {
  		  progress = this.progress
  			// bar.transition(0)
        // width1 = Math.abs(Math.abs(start) - Math.abs(e.touches[0].clientX) ) * 0.33
        // color.css('width', width1 + 'px')
        let navSum1 = navSum * progress
        
        
          bar.style.transform = 'translateX(' + navSum1 + 'px)'
        

          
        
        // console.log(e.touches[0].clientX);
        
        // console.log(navSum1,navSum*progress);
  			//粉色255,72,145灰色51,51,51
        // console.log(navSum,blockWidth,progress,e.touches[0].pageX,width1);
  			for (let i = 0; i < this.slides.length; i++) {
  				let slideProgress = this.slides[i].progress
  				if (Math.abs(slideProgress) < 1) {
  					let r = Math.floor((194 - 51) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51)
  					let g = Math.floor((12 - 51) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51)
  					let b = Math.floor((12 - 51) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51)
  					navSwiper.slides.eq(i).find('span').css('color', 'rgba(' + r + ',' + g + ',' + b + ',1)')
  				}
  			}
  		},
  		transitionStart: function() {
  			let activeIndex = this.activeIndex
  			let activeSlidePosition = navSwiper.slides[activeIndex].offsetLeft
  			//释放时导航粉色条移动过渡
        // bar.style.transition = tSpeed
        
        // console.log(activeSlidePosition);
        
  			bar.style.transform = ('translateX(' + activeSlidePosition + 'px)')
  			//释放时文字变色过渡
  			navSwiper.slides.eq(activeIndex).find('span').transition(tSpeed)
  			navSwiper.slides.eq(activeIndex).find('span').css('color', 'rgba(194,12,12)')
  			if (activeIndex > 0) {
  				navSwiper.slides.eq(activeIndex - 1).find('span').transition(tSpeed)
  				navSwiper.slides.eq(activeIndex - 1).find('span').css('color', 'rgba(51,51,51,1)')
  			}
  			if (activeIndex < this.slides.length) {
  				navSwiper.slides.eq(activeIndex + 1).find('span').transition(tSpeed)
  				navSwiper.slides.eq(activeIndex + 1).find('span').css('color', 'rgba(51,51,51,1)')
  			}
  			//导航居中
  			let navActiveSlideLeft = navSwiper.slides[activeIndex].offsetLeft //activeSlide距左边的距离

  			navSwiper.setTransition(tSpeed)
  			if (navActiveSlideLeft < (clientWidth - parseInt(navSlideWidth)) / 2) {
  				navSwiper.setTranslate(0)
  			} else if (navActiveSlideLeft > navWidth - (parseInt(navSlideWidth) + clientWidth) / 2) {
  				navSwiper.setTranslate(-152)
  			} else {
  				navSwiper.setTranslate((clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft)
  			}
        // console.log(navActiveSlideLeft > navWidth - (parseInt(navSlideWidth)) / 2);
        // console.log(navWidth,navWidth - (parseInt(navSlideWidth)) / 2,navActiveSlideLeft );
  		},
      // touchEnd(){
      //   console.log(this.activeIndex);
       
    
      // },
  
      slideChange: function(){
        
        // setTimeout(() => {
        //   page.style.height = this.slides[this.activeIndex].offsetHeight
        //   self.$refs.scroll.refresh()
        //   console.log(this.slides[this.activeIndex].offsetHeight);
        // }, 5000);
        // console.log(page);
        
      //    switch(this.activeIndex){
      //     case 0:
      //     self.currentType = '全部'
      //     break
      //     case 1:
      //     self.currentType = '官方'
      //     break
      //     case 2:
      //     self.currentType = '华语'
      //     break
      //     case 3:
      //     self.currentType = '华语'
      //     break
      //     case 4:
      //     self.currentType = '流行'
      //     break
      //     case 5:
      //     self.currentType = '电子'
      //     break
      //     case 6:
      //     self.currentType = '古风'
      //     break
      //     case 7:
      //     self.currentType = '民谣'
      //     break

      // }
      if(this.activeIndex === 0){
                    self.currentType = '全部'
        if(self.Songs.全部.list.length > 0){
          return
        }

      }
      if(this.activeIndex === 1){
                      self.currentType = '官方'
        if(self.Songs.官方.list.length > 0){
          return
        }

        
        self.loading = true
        self._getOtherSongListinfo(undefined,undefined,'官方').then(res => {
          self.Songs.官方.list = res       
        })
      }
      if(this.activeIndex === 2){
                       self.currentType = '流行'
        if(self.recommendSongs.length > 0){
          return
        }
        self._getOtherSongListinfo(undefined,undefined,'精品').then(res => {
          self.recommendSongs = res       
        })
      }
      if(this.activeIndex === 3){
                      self.currentType = '华语'
        if(self.Songs.华语.list.length > 0){
          return
        }

        self.loading = true
        self._getOtherSongListinfo(undefined,undefined,'华语').then(res => {
          self.Songs.华语.list = res       
        })
      }
      if(this.activeIndex === 4){
                       self.currentType = '流行'
        if(self.Songs.流行.list.length > 0){
          return
        }

        self.loading = true
        self._getOtherSongListinfo(undefined,undefined,'流行').then(res => {
          self.Songs.流行.list = res       
        })
      }
      if(this.activeIndex === 5){
                self.currentType = '电子'
        if(self.Songs.电子.list.length > 0){
          return
        }
       
        self.loading = true
        self._getOtherSongListinfo(undefined,undefined,'电子').then(res => {
          self.Songs.电子.list = res       
        })
      }
      if(this.activeIndex === 6){
        self.currentType = '古风'
        if(self.Songs.古风.list.length > 0){
          return
        }
       
        self.loading = true
        self._getOtherSongListinfo(undefined,undefined,'古风').then(res => {
          self.Songs.古风.list = res       
        })
      }
      if(this.activeIndex === 7){
        self.currentType = '民谣'
        if(self.Songs.民谣.list.length > 0){
          return
        }
        
        self.loading = true
        self._getOtherSongListinfo(undefined,undefined,'民谣').then(res => {
          self.Songs.民谣.list = res       
        })
      }
      self.$refs.scroll.refresh()
      }
  	}
  });
  

  navSwiper.$el.on('touchstart', function(e) {
  	e.preventDefault() //去掉按压阴影
  })
   navSwiper.on('tap', function(e) {
    
  	let clickIndex = this.clickedIndex
  	let clickSlide = this.slides.eq(clickIndex)
  	pageSwiper.slideTo(clickIndex, 0);
  	this.slides.find('span').css('color', 'rgba(51,51,51,1)');
    clickSlide.find('span').css('color', 'rgba(194,12,12,1)');
    self.$refs.scroll.refresh()
  })

  //内容滚动
  let translate = 72			

  //热卖		
  var bannerSwiper = new Swiper('.banner', {
  	loop: true,
  	pagination: {
  		el: '.swiper-pagination',
  		type: 'fraction',
  		renderFraction: function(currentClass, totalClass) {
  			return '<span class="' + currentClass + '"></span>' + '/' + '<span class="' + totalClass + '"></span>';
  		},
  	},
  });
}
}
</script>

<style lang='less' scoped>

.content{
  /* height: calc(100% - 60px); */
  /* background-color: #fff; */
  overflow: hidden;
  // padding-top: 5px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
}
li {
	list-style:none;
}
body {
	background:#fff;
	font-family:Helvetica Neue,Helvetica,Arial,sans-serif;
	font-size:12px;
}
.img img {
	width:100%;
	display:block;
}
#top {
	position:absolute;
	top:0;
	z-index:5;
	width:100%;
  background:#fff;
  .iconfont {
    margin-top: 10px;
  font-family:"iconfont" !important;      
  font-size:18px;
  font-style:normal;
   color: #000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* padding: 0 5px; */
  span{
    margin-left: 20px;
    flex: 1;
  }
  }
}
#top .addr {
	height:36px;
	margin:0 auto;
	display:block;
}
#top .search {
	position:absolute;
	top:0;
	right:0;
	height:36px;
	display:block;
}
#nav {
	border-bottom:1px solid #ebebeb;
}
#nav .swiper-slide span {
	margin:0 5px;
	text-align:center;
	display:block;
	line-height:2.5;
	font-size:14px;
	color:#333333;
}
#nav .bar {
	width:50px;
	height:3px;
	position:absolute;
  transition: 500ms;
  left: 7px;
	bottom:0px;
}
#nav .bar .color {
	width:50px;
  margin:0 auto;
  margin-top: 1px;
	height:2px;
  background:#c20c0c;
  max-width: 60px;
  min-width: 36px;
}
.banner img {
	width:100%;
	display:block;
}
.banner	.swiper-pagination {
	left:auto;
	right:7px;
	bottom:7px;
	width:auto;
	padding:2px 7px;
	border-radius:10px;
	color:#fff;
	background:rgba(0,0,0,.3);
}
#page {
  margin-bottom:50px;
  height: 100%  ;
	// height:100vh;
}
#page .swiper-slide{height:10px}
#page .swiper-slide-active { height:auto}
#songs-square{
  height: 100vh;
  -webkit-overflow-scrolling: touch;
}
#page .swiper-slide{height:10px}
#page .swiper-slide-active { height:auto}
#page .slidepage {
	// height:100%;
}
.scroll {
	height:100%;
}
.slidescroll {
	height:auto;
}
#footer {
	position:fixed;
	bottom:0;
	z-index:5;
}
#certify {
  position: relative;
  width: 320px;
  margin: 0 auto;
  height: 200px;
  margin-top: 60px;
}

#certify .swiper-container {
  padding-bottom: 60px;
  padding-top: 30px;
}

.swiper1{
  width: 100%;
  /* height: 100vh; */
}
#certify  .swiper-slide {
  width: 160px;
  height: 160px;
  background: #fff;
  box-shadow: 0 8px 30px #ddd;
}
#certify  .swiper-slide img{
  display:block;
  width: 100%;
  height: 100%;
}
#certify .swiper-pagination {
  width: 100%;
  bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px;
  border: 3px solid #fff;
  background-color: #d5d5d5;
  width: 10px;
  height: 10px;
  opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
  border: 3px solid #00aadc;
  background-color: #fff;
}

#certify .swiper-button-prev {
  left: -30px;
  width: 45px;
  height: 45px;
  /* background: url(../images/wm_button_icon.png) no-repeat; */
  background-position: 0 0;
  background-size: 100%;
}

#certify .swiper-button-prev:hover {
  background-position: 0 -46px;
  background-size: 100%
}

#certify .swiper-button-next {
  right: -30px;
  width: 45px;
  height: 45px;
  /* background: url(../images/wm_button_icon.png) no-repeat; */
  background-position: 0 -93px;
  background-size: 100%;
}

#certify .swiper-button-next:hover {
  background-position: 0 -139px;
  background-size: 100%
}
.recommends-content{
  // margin-top: 20px;
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 60px auto 0;
}
</style>