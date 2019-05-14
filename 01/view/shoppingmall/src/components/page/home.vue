<template>
  <div class="content">
    <div class="home-search">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="home-swipe">
      <slides :slides="slides"></slides>
    </div>
    <ul class="category">
      <li v-for="item in category">
        <img :src="item.image" :alt="item.mallCategoryNam" width="100%">
        <p>{{item.mallCategoryName}}</p>
      </li>
    </ul>
    <div class="picture">
      <img :src="advertesPicture.PICTURE_ADDRESS" alt="" width="100%">
    </div>
    <section class="recommend">
      <h3>商品推荐</h3>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in recommend" :key="index">
          <div class="slide-item">
            <img :src="slide.image" alt="" width="80%">
            <p>{{slide.goodsName}}</p>
            <p>￥{{slide.mallPrice|toFixed}}({{slide.price|toFixed}})</p>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <floor :floor="floor"></floor>
    <div class="hotGoods">
      <h3 class="title">热卖商品</h3>
      <div class="wares">
        <div class="goods" v-for="item in hotGoods" @click="$router.push({params:{goodsId:item.goodsId},name:'detail'})">
          <img :src="item.image" alt="" width="100%">
          <p>{{item.name}}</p>
          <span class="prc">￥{{item.mallPrice|toFixed}}</span>
          <del>￥{{item.price|toFixed}}</del>
        </div>
      </div>
    </div>
    <tabBar :active="0"></tabBar>
  </div>
</template>

<script>
  import tabBar from "../base/tabBar.vue";
  import {getSlidesData} from "../../api";
  import slides from "../base/slides.vue";
  import 'swiper/dist/css/swiper.css';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import floor from "../base/floor.vue";


  export default {
    name: "home",
    data() {
      return {
        swiperOption: {
          slidesPerView: 3
        },
        slides: [],
        category: [],
        advertesPicture: [],
        recommend: [],
        floor: [],
        hotGoods: [],
        value: 'iPhone'
      }
    },
    // created(){
    //     getSlidesData().then(result=>{
    //       console.log(result);
    //     })
    // },

    //=>用语法糖修改
    async created() {
      let data = await getSlidesData();
      this.slides = data.slides;
      this.category = data.category;
      this.advertesPicture = data.advertesPicture;
      this.recommend = data.recommend;
      this.floor = data.floor;
      this.hotGoods = data.hotGoods;
      console.log(data);
    },
    methods: {
      onCancel() {
      },
      onSearch() {
      }
    },
    components: {
      tabBar,
      slides,
      swiper,
      swiperSlide,
      floor
    }
  }
</script>

<style scoped lang="less">
  .content {
    background: #dddddd38;
    margin-bottom: 79/100rem;
  }

  .category {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 10/100rem;
    padding: 10/100rem 0;
    background: #fff;

    li {
      width: 20%;
      margin: 0 10/100rem;

      p {
        text-align: center;
        font-size: 20/100rem;
      }
    }
  }

  .picture {
    padding: 10/100rem 0;
  }

  .recommend {
    background: #fff;
    height: 100%;
    padding: 10/100rem 0;

    h3 {
      margin: 0;
      padding: 0 8/100rem;
      border-bottom: 1px solid #ddd;
      font-size: 28/100rem;
      margin-bottom: -6/100rem;
      padding-bottom: 8/100rem;
      color: #e11388;
    }

    .slide-item {
      text-align: center;
      box-sizing: border-box;
      font-size: 16/100rem;
      margin-top: 10/100rem;
      border-right: 1px dashed #ddd;

      p {
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 8/100rem 0 0 0;
      }

      p:nth-of-type(2) {
        color: red;
        font-weight: bold;
        font-size: 22/100rem;
      }
    }
  }

  .hotGoods .title {
    text-align: center;
    font-size: 0.28rem;
  }

  .wares {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;

    .goods {
      margin: 10/100rem;
      width: 300/100rem;
      font-size: 24/100rem;

      .prc {
        color: red;
        font-size: 28/100rem;
        margin-right: 10/100rem;
        font-weight: bold;
      }

      del {
        color: #dfdfdf;
      }
    }

  }

</style>
