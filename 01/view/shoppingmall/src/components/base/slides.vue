<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in slides" :key="index">
        <img v-lazy="image.image" width="100%"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  //=>只有在首页用到轮播，只需要在首页增加组件模块
  import {SwipeItem, Swipe} from "vant";

  export default {
    name: "slides",
    props:["slides"],
    components: {
      //=>需要注册
      [SwipeItem.name]: SwipeItem,
      [Swipe.name]: Swipe,
    }
  }
</script>

<style scoped>

</style>
