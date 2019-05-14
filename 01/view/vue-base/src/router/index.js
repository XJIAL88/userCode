import Vue from "vue"; //=>每个模块都属于一个闭包
import home from "../components/home.vue";
import list from "../components/list.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter); //和以前不一样的地方引入vue必须使用use
export default new VueRouter({ //=>导出模块
    routes:[
        {path:"/home",component:home},
        {path:"/list",component:list}
    ]
});