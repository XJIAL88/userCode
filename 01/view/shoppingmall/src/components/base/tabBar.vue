<template>
  <van-tabbar v-model="index">
    <van-tabbar-item icon="wap-home" to="home">首页</van-tabbar-item>
    <van-tabbar-item icon="wap-nav" to="list" dot>分类</van-tabbar-item>
    <van-tabbar-item icon="cart" to="car" info="5">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" to="personal" info="20">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    computed:{
      index:{
        get(){
          return this.active;
        },
        set(){}
      }
    },
    props:["active"]
  }
</script>

<style scoped>

</style>
