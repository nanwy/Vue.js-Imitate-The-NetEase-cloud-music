<template>
  <div class="bottom-bar" @click="shwoPlayer">
    <div class="front-cover"></div>
    <div class="item-info">
        <div class="name">爱你</div>
        <div class="songer">老戴</div>
    </div>
    <div class="control">
      <div>播放</div>
      <div>菜单</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.bottom-bar{
  padding: 0 5px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 40px;
  background-color: #fff;
  display: flex;
  align-items: center;

}
.bottom-bar:after{
  content: ''; 
  position: absolute; 
  top: 0; 
  left: 0; 
  border-top: 1px solid rgb(214, 214, 214); 
  width: 200%; 
  height: 200%; transform: scale(.5); 
  transform-origin: left top;
}

.item-info{
  margin-left: 5px;
}
.front-cover{
  
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #000;
  vertical-align: middle;
}
.control{
  margin-left: auto;
  padding-right: 10px;
  display: flex;
}
</style>