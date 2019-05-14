//=>创建ajax实例
let xhr = new XMLHttpRequeat(); //=>IE6中不兼容，使用的是new ActiveXObject来实现

//=>打开请求：发动请求之前的一些配置项
/**
 * 1. http method 请求方式(一共8个)
 * get/delete/head/options/trace/connect
 * post/put
 * 2.URL 向服务器端发送请求的API(Application Programming Interface)接口地址
 * 3.async 设置ajax请求的同步异步，默认是异步（写true也是异步），false是同步，项目中都使用异步编程，防止阻塞后续代码执行
 * 4.user-name / user-pass:用户名密码，一般不用
 */
xhr.open([http method], [url], [async], [user - name], [user - pass]);

//=>事件监听：一般监听的都是readystatechange事件（ajax状态改变事件），基于这个事件可以获取服务器返回的响应头响应主体内容
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        xhr.responseText;
    }
}

//=>第四步：发送ajax请求，从这步开始，当前ajax任务开始，如果ajax是同步的，后续代码不会执行，要等到ajax状态成功后在执行，反之异步不会
xhr.send([请求主体内容]);