<template>
  <div class='container'>
    <div class="base-info">
      <em class='setting'>
        <van-icon name="setting"/>
      </em>
      <div class="user-look">
        <img :src="userLook" alt="">
      </div>
      <div class="user-name">
        <p>胡子</p>
        <p>普通用户</p>
      </div>
    </div>
    <tabBar :active="3"></tabBar>
  </div>
</template>

<script>
  import tabBar from "../base/tabBar.vue";
  import userLook from "../../img/user.png";

  export default {
    name: "personal",
    data() {
      return {
        userLook
      }
    },
    components: {tabBar}
  }
</script>

<style scoped lang=less>
  .container {
    background: #dddddd38;

    .base-info {
      background: #53dbf0;
      padding: 0.5rem 1rem;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      position: relative;

      .setting {
        position: absolute;
        top: 0.14rem;
        right: 0.14rem;
        font-size: 0.45rem;
        color: #fff;
      }

      .user-look {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.3rem;

        img {
          width: 100%;
          border-radius: 50%;
        }
      }

      .user-name {
        font-size: 0.26rem;
      }
    }

  }
</style>
