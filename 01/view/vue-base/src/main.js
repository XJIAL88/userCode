import Vue from "vue"; //=>runtime不支持template，只支持render
import App from "./App.vue";
import router from "./router/index.js";
import notify from "./Plugin/notify.js";

Vue.use(notify); //=>使用带有install的对象
new Vue({
    el: "#app",
    router,
    render: h => h(App)
});

