(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ca08168","chunk-0f4ee70e"],{"01b0":function(t,e,a){"use strict";var n=a("3bb6"),s=a.n(n);s.a},1273:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[n("div",{attrs:{id:"song"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"title",style:{backgroundImage:"url("+t.background+")"}},[n("gbnav",{staticClass:"nav",attrs:{flag:!0}},[n("div",{staticClass:"left"},[n("span",{staticClass:"left-title"},[n("marrquee",{attrs:{val:t.title}})],1),n("span",{staticClass:"description"},[t._v("编辑推荐:"+t._s(t._f("description1")(t.songDetail.description)))])]),n("div",{staticClass:"right"},[n("span",[n("i",{staticClass:"iconserch iconfont"})]),n("span",[n("i",{staticClass:"iconcaidan1 iconfont"})])])])],1),n("song-tab-bar",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],staticClass:"song-tab-bar1",attrs:{many:t.songDetail.trackCount?t.songDetail.trackCount:t.songDetail.album?t.songDetail.album.size:0,subscribedCount:t.songDetail.subscribedCount}}),n("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentscroll}},[t.loading?n("page-loading",{staticStyle:{height:"5rem"}}):t._e(),n("find-song-detail",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{songDetailId:t.songDetailId,imgUrl:t.songDetail.coverImgUrl,title:t.title,name:t.songDetail.name,backgroundImage:t.songDetail.coverImgUrl,description:t.songDetail.description,touImg:t.songDetail.creator?t.songDetail.creator.avatarUrl:t.songDetail.album?t.songDetail.album.artist.picUrl:"",nickname:t.songDetail.creator?t.songDetail.creator.nickname:t.songDetail.album?t.songDetail.album.artist.name:"",comment:t.songDetail.commentCount,share:t.songDetail.shareCount,playCount:t.songDetail.playCount}}),n("song-tab-bar",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],ref:"findsongdetail",class:{songtabbar:t.isTabFixed},attrs:{many:t.songDetail.trackCount?t.songDetail.trackCount:t.songDetail.album?t.songDetail.album.size:0,subscribedCount:t.songDetail.subscribedCount},on:{startAllSong:function(e){return t.startPlayAll(0)}}}),n("div",{staticClass:"music-list"},t._l(t.songDetail.tracks,(function(e,a){return n("music-list",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],key:a,attrs:{maxbr:t.isSq[a],num:a+1,songName:e.name,arName:e.ar,alName:e.al.name,alia:e.alia[0],songId:e.id},on:{startPlay:function(e){return t.startPlayAll(a)}}})})),1)],1),t.showModal?n("div",{staticClass:"mask",on:{click:function(e){t.showModal=!1}}}):t._e(),t.showModal?n("div",{staticClass:"pop"},[n("img",{attrs:{src:a("f269"),alt:""}}),n("p",[t._v("抱歉,该资源暂无版权,我们正在努力争取中")])]):t._e()],1)])},s=[],i=(a("a4d3"),a("e01a"),a("d81d"),a("b0c0"),a("d28b"),a("e260"),a("d3b7"),a("3ca3"),a("ddb0"),a("06c5"));function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(i["a"])(t))){var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,o=!0,r=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){r=!0,s=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(r)throw s}}}}var r,l=a("5530"),c=a("aa65"),u=a("1bac"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"music-content",on:{click:t.startPlay}},[a("div",{staticClass:"list-item"},[a("span",{staticClass:"num"},[t._v(t._s(t.num))]),a("div",{staticClass:"song-detail"},[a("div",{staticClass:"song-name"},[t._v(t._s(t.songName)+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.alia,expression:"alia"}]},[t._v("("+t._s(t.alia)+")")])]),t._l(t.arName,(function(e){return a("div",{staticClass:"creator"},[t.maxbr?a("span",{staticClass:"maxbr"},[t._v("SQ")]):t._e(),t._v(t._s(e.name)+" - "+t._s(t.alName))])}))],2),t._m(0)])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"more"},[a("i",{staticClass:"iconcaidan1 iconfont"})])}],g=(a("a9e3"),a("2f62")),f={computed:Object(l["a"])({},Object(g["c"])({playList:"PLAY_LIST"})),props:{num:{type:Number},songName:{type:String},arName:{type:Array},alName:{type:String},maxbr:{type:Boolean},songID:{type:Number},alia:{type:String}},created:function(){},methods:{startPlay:function(){this.$emit("startPlay")}}},v=f,p=(a("91f0"),a("2877")),b=Object(p["a"])(v,d,m,!1,null,"71048556",null),h=b.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"play-list"},[a("div",{staticClass:"play-title"},[a("i",[t._v("播放")]),a("span",{on:{click:t.startAll}},[t._v("播放全部")]),t.many?a("span",{staticClass:"total"},[t._v("(共"+t._s(t.many)+"首)")]):t._e(),t.subscribedCount?a("span",{staticClass:"star"},[t._v("+收藏("+t._s(t.subscribedCount)+")")]):t._e()])])},_=[],C={props:{many:{type:Number},subscribedCount:{type:Number}},methods:{startAll:function(){this.$emit("startAllSong")}}},D=C,w=(a("8dae"),Object(p["a"])(D,y,_,!1,null,"0a46e768",null)),S=w.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"marquee-wrap"},[a("div",{ref:"scroll",staticClass:"scroll"},[a("p",{staticClass:"marquee"},[t._v(t._s(t.val))]),a("p",{ref:"copy",staticClass:"copy"})]),a("p",{staticClass:"getWidth"},[t._v(t._s(t.val))])])},x=[],k={name:"marquee",props:{val:{type:String}},data:function(){return{timer:null}},created:function(){},mounted:function(){},watch:{val:function(t){var e=this;if("歌单"==t)this.$refs.copy.innerText="",clearTimeout(this.timer),console.log(this.timer),this.$refs.scroll.style.transform="translateX(0px)",console.log(this.$refs.scroll);else{this.$refs.copy.innerText=this.val;setTimeout((function(){e.move(),console.log("timer")}),1e3)}}},methods:{move:function(){var t=document.querySelector(".marquee-wrap").clientWidth,e=document.querySelector(".getWidth").scrollWidth;if(!(e<=t)){var a=document.querySelector(".scroll");console.log("this.val");var n=0;this.timer=setInterval((function(){n-=1,-n>=e&&(n=16),a.style.transform="translateX("+n+"px)"}),20)}},gedan:function(){console.log(this.$refs.copy)}},beforeDestroy:function(){clearInterval(this.timer)}},N=k,O=(a("01b0"),Object(p["a"])(N,I,x,!1,null,"311666b8",null)),j=O.exports,$=(a("aaf6"),a("01fb")),A=a("5d17"),T=a("1ae0"),P={name:"Song",data:function(){return{songDetailId:0,songDetail:[],songPeivileges:[],title:"",background:"",background1:"",img:a("cf05"),isSq:{},i:[],loading:!0,isTabFixed:!1,tabOffsetTop:0,isNone:0,newSongDeatilId:0,no:{},showModal:!1}},beforeCreate:function(){r=this},filters:{description1:function(t){return t?r.songDetail.description:"猜你喜欢"}},computed:Object(l["a"])({},Object(g["c"])({fullScreen:"FULL_SCREEN",currentIndex:"CURRENT_INDEX"})),mounted:function(){},created:function(){var t=this,e=this.$route.params.songDetailId,a=this.$route.params.newSongDeatilId;this.songDetailId=e,this.newSongDeatilId=a,e?e&&(console.log(this.songDetailId),this.title="歌单",T["a"].getSongDetail(this.songDetailId).then((function(e){var a=e.data;console.log(e),200===a.code&&(t.songDetail=a.playlist,t.songPeivileges=a.privileges,t._isSQ(),t.loading=!1,console.log(t.no))})).catch((function(t){console.log(t)}))):this.$router.push("/find")},components:{FindSongDetail:c["default"],MusicList:h,PageLoading:u["a"],Scroll:A["a"],Gbnav:$["a"],SongTabBar:S,marrquee:j},methods:Object(l["a"])({contentscroll:function(t){this.tabOffsetTop=this.$refs.findsongdetail.$el.offsetTop,-t.y>100?(this.title=this.songDetail.name,this.isTabFixed=50-t.y>this.tabOffsetTop,this.background=this.songDetail.coverImgUrl,console.log(this.title)):(this.title="歌单",this.background="transparent",console.log(this.title))},_isSQ:function(){var t,e=[],a=[],n=o(this.songPeivileges);try{for(n.s();!(t=n.n()).done;){var s=t.value;e.push(s.maxbr),a.push(s.st)}}catch(i){n.e(i)}finally{n.f()}this.no=a,this.isSq=e.map((function(t){return t>5e5}))},startPlayAll:function(t){-200!==this.no[t]?(console.log(this.songDetail.tracks),this.setSongAll({list:this.songDetail.tracks,index:t}),console.log(this.$store.state.currentIndex)):this.showModal=!0}},Object(g["b"])(["setSongAll"]))},E=P,q=(a("f6d4"),Object(p["a"])(E,n,s,!1,null,"f66b39c4",null));e["default"]=q.exports},"3bb6":function(t,e,a){},"6c48":function(t,e,a){},"6ddd":function(t,e,a){},"8dae":function(t,e,a){"use strict";var n=a("6ddd"),s=a.n(n);s.a},"91f0":function(t,e,a){"use strict";var n=a("6c48"),s=a.n(n);s.a},9731:function(t,e,a){},aa65:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"content",style:{backgroundImage:"url("+t.backgroundImage+")"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"h"}),a("div",{staticClass:"title-content"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl,expression:"imgUrl"}],attrs:{alt:""}}),a("span",{staticClass:"play-number"},[a("i",{staticClass:"iconbofang iconfont"}),t._v(" "+t._s(t._f("setPlayCount")(t.playCount)))]),a("div",{staticClass:"name"},[t._v(t._s(t.name)+" "),t.touImg?a("div",{staticClass:"tou"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.touImg,expression:"touImg"}],attrs:{alt:""}}),t.nickname?a("span",[t._v(t._s(t.nickname)+">")]):t._e(),a("div",{staticClass:"description description1"},[t._v(" "+t._s(t.description)+" ")])]):t._e()])]),a("div",{staticClass:"downlond"},[a("div",{staticClass:"comments"},[t._v("评论 "),a("span",[t._v(t._s(t.comment))])]),a("div",{staticClass:"comments"},[t._v("分享 "),a("span",[t._v(t._s(t.share))])]),a("div",{staticClass:"comments"},[t._v("下载")]),a("div",{staticClass:"comments"},[t._v("多选")])])])])])},s=[],i=(a("a9e3"),{name:"FindSongDetail",props:{songDetailId:{type:Number},imgUrl:{type:String},title:{type:String},name:{type:String},backgroundImage:{type:String},description:{type:String},touImg:{type:String},nickname:{type:String,default:function(){return"网易云"}},playCount:{type:Number},comment:{type:Number},share:{type:Number}},data:function(){return{}},created:function(){console.log(this.backgroundImage)},filters:{setPlayCount:function(t){return t?(t>1e4&&(t=Math.floor(t/1e4)+"万"),t):""}},components:{}}),o=i,r=(a("c6e6"),a("2877")),l=Object(r["a"])(o,n,s,!1,null,"ffbad9dc",null);e["default"]=l.exports},aaf6:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){var t=function(t,e){void 0===e&&(e=1);var a=new Image;return t.startsWith("data")||(a.crossOrigin="Anonymous"),new Promise((function(n,s){a.onload=function(){var t=a.width*e,s=a.height*e,i=function(t,e){var a=document.createElement("canvas");return a.setAttribute("width",t),a.setAttribute("height",e),a.getContext("2d")}(t,s);i.drawImage(a,0,0,t,s);var o=i.getImageData(0,0,t,s);n(o.data)};var i=function(){return s(new Error("An error occurred attempting to load image"))};a.onerror=i,a.onabort=i,a.src=t}))},e={ignore:[],scale:1};return function(a,n){void 0===n&&(n=e);try{var s=(n=Object.assign({},e,n)).ignore,i=n.scale;return(i>1||i<=0)&&console.warn("You set scale to "+i+", which isn't between 0-1. This is either pointless (> 1) or a no-op (≤ 0)"),Promise.resolve(t(a,i)).then((function(t){return function(t,e){for(var a={},n=0;n<t.length;n+=4){var s=t[n+3];if(0!==s){var i=Array.from(t.subarray(n,n+3));if(-1===i.indexOf(void 0)){var o=s&&255!==s?"rgba("+i.concat([s]).join(",")+")":"rgb("+i.join(",")+")";-1===e.indexOf(o)&&(a[o]?a[o].count++:a[o]={color:o,count:1})}}}return Object.values(a).sort((function(t,e){return e.count-t.count}))}(t,s)}))}catch(t){return Promise.reject(t)}}}))},b698:function(t,e,a){},c6e6:function(t,e,a){"use strict";var n=a("b698"),s=a.n(n);s.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},f269:function(t,e,a){t.exports=a.p+"img/582513839.ec1c89d9.jpg"},f6d4:function(t,e,a){"use strict";var n=a("9731"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-1ca08168.300d1f29.js.map