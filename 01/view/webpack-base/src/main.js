import Vue from "vue";
/**
 * 直接这样引用vue 引用的并不是vue.js，而是引用的vue的runtime
 * vue = compiler + runtime （compiler可以编译模板）
 */

import App from "./App.vue";


new Vue({
    //render 函数的作用是将虚拟dom渲染成真实的dom
    //createElement 返回的是虚拟的dom

    /*render:function(createElement){
        return createElement(App);
    }*/
    //=>简写
    render: (h) => h(App)
}).$mount("#app")


