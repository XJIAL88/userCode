// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//=>导入全部组件
//import vant from "vant";
//=>导入样式
//import "vant/lib/index.css";


//=>用到什么导入什么模块，需要结构赋值
import {Icon, Tabbar, TabbarItem, Lazyload, Search} from "vant";
Vue.use(Icon).use(Tabbar).use(TabbarItem).use(Lazyload).use(Search);

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});

Vue.filter('toFixed',(tag,val=2)=>{
  return parseFloat(tag).toFixed(val);
});

//=>根据屏幕宽度设置fontSize根字号
let w = document.documentElement.clientWidth || document.body.clientWidth;
document.documentElement.style.fontSize = w / 640 * 100 + 'px';
