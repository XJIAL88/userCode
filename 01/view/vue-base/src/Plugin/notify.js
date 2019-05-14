import modal from "./notify.vue";
let notify = { //=>需要在此对象拥有一个install方法

};

notify.install = function(Vue,options={delay:3000}){
    Vue.prototype.$notify = function(msg,opt={}){
        options = {...options,...opt};
        let V = Vue.extend(modal);//=>返回的是一个构造函数的子类，蚕食是包含组件选项的对象
        let vm = new V;
        let oDiv = document.createElement('div');//=>创建一个div将实例挂载到元素上
        vm.$mount(oDiv);
        document.body.appendChild(vm.$el);//=>把当前实例这个真实对象扔到页面上
        setTimeout(()=>{ //=>延迟多少秒将dom元素移出
            document.body.removeChild(vm.$el); //=>将实例上的元素删除掉
        },options.delay);
    }
};

//=>导出这个install的对象，如果使用vue.use就会调用这个install方法
export default  notify