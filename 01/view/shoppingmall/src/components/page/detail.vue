<template>
<!--  <h1>{{$router.params.goodsId}}</h1>-->
  <h1>信息详情页</h1>
</template>

<script>
  export default {
    name: "detail",
    watch: {
      $route: {
        handler() {
          console.log(this.$router.params);
        },
        immediate: true,
      }
    }
  }


</script>

<style scoped>

</style>
