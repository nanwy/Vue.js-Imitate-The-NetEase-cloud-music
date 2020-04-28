<template>
  <div class="music-content">
    <div class="list-item">
      <span class="num">{{num}}</span>
      <div class="song-detail">
        <div class="song-name">{{songName}} <span v-show="alia">({{alia}})</span> </div>
        <div class="creator" v-for="item in arName">
          <span  v-if="maxbr" class="maxbr">SQ</span>{{item.name}} - {{alName}}</div>
      </div>
      <div class="more">
        <i class="iconcaidan1 iconfont"></i>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  
 props:{
   num:{
     type:Number
   },
   songName:{
     type:String
   },
   arName:{
     type:Array
   },
   alName:{
     type:String
   },
   maxbr:{
     type:Boolean
   },
   songID:{
     type:Number
   },
   alia:{
     type:String
   }
 },
 created(){
  //  console.log(this.maxbr);
   
 },

 methods: {
 
},
}

</script>

<style scoped>
.music-content{
  position: relative;
background-color: #fff;
margin-top: -1px;
z-index: 5;
height: 30px;
  padding: 10px 5px 10px 5px;

}
.num {
    line-height: 27px;
    color: #9a9191;
}
.list-item{

  display: flex;
  width: 100%;
  justify-content: space-between;
}
.song-detail{
  width: 300px;


}
.song-name{
   width: 290px;
      text-overflow: ellipsis;
  font-weight: 100;
    overflow: hidden; 
    -webkit-box-orient: vertical;
    white-space:nowrap;

}
.creator{
  width: 290px;
      text-overflow: ellipsis;

    overflow: hidden; 
    -webkit-box-orient: vertical;
    white-space:nowrap;
  color: #9a9191;
    font-size: 12px;
    padding: 5px 0 ;
}
.maxbr{
  border: 1px solid red;
  width: 18px;
  height:13px;
  transform: scale(0.8,0.8);
    display:inline-block;
    color:red;
    font-weight: 100;
}


.iconfont {
font-family:"iconfont" !important;      
font-size:25px;
font-style:normal;
color: #ccc;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
padding: 0 5px;
}
</style>