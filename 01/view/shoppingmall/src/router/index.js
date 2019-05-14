import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from "../components/page/home.vue";
import list from "../components/page/list.vue"
import car from "../components/page/car.vue"
import personal from "../components/page/personal.vue"
import Detail from "../components/page/detail.vue";

export default new Router({
  routes: [
    {path:"/",component:home},
    {path:"/home",component:home},
    {path:"/list",component:list},
    {path:"/car",component:car,meta:{keepAlive:true}},
    {path:"/personal",component:personal},
    {path:"/goodsDetail/:goodsId",component:Detail,name:'detail'},
    {path:"*",component:home},
  ]
})
