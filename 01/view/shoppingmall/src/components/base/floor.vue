<template>
  <ul class="floor">
    <li class="floor-1">
      <div class="floor-left">
        <!--报错：[Vue warn]: Error in render: "TypeError: Cannot read property 'image' of undefined"
            出现的原因： 可能是页面渲染和请求数据是异步操作， 数据还未请求结束，页面已经开始渲染了，所以刚开始报未定义变量，
            等数据获取结束后，再次渲染，页面内容出来了，但是刚开始的警告也出来了
            解决办法：
            1、 <img :src="item && item.imgUrl" />
            2、 在使用item之前先 v-if="item"-->

        <img :src="floor[0] && floor[0].image" alt="" width="100%">
      </div>
      <div class="floor-right">
        <div>
          <img :src="floor[0] && floor[1].image" alt="" width="100%">
        </div>
        <div>
          <img :src="floor[0] && floor[2].image" alt="" width="100%">
        </div>
      </div>
    </li>
    <li class="floor-2">
      <div v-for="item in floor.slice(3)">
        <img :src="item.image" alt="" width="100%">
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "floor",
    props: {
      floor: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped lang="less">
  .floor {
    .floor-1 {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      background: #fff;
      margin: 10/100rem 0;

      .floor-left {
        width: 840/100rem;
      }
    }

    .floor-2 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      margin: 10/100rem 0;

      div {
        width: 50%;
        box-sizing: border-box;
        background: #fff;
      }

      div:nth-child(2n-1) {
        border-right: 1px solid #ccc;
      }
    }
  }
</style>
