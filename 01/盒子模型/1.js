(function() {
    let jQuery = function() {

        let Fn = function() {
            return init();
        };

        let init = function() {}
        init.prototype = Fn.prototype;
        return init;
    }
    window.$ = window.jQuery = jQuery;
    $();
})()

let offset = function(element) {
    let curTop = element.offsetTop,
        curLeft = element.offsetLeft,
        p = element.offsetParent;
    while (p.tagName !== 'BODY') {
        curTop += p.clientTop;
        curTop += p.offsetTop;
        curLeft += p.clientLeft;
        curLeft += p.offsetLeft;
        p = p.offsetParent;

    }
    return {
        top: curTop,
        left: curLeft
    }

}


// let obj = {
//     aa: function aa() {
//         console.log(1)
//     },
//     bb: function bb() {
//         console.log(1)
//     },
//     cc: function cc() {
//         console.log(1)
//     }
// }

// for (let key in obj) {
//     offset[key] = obj[key];
// }

let dataVal = null;
let xhr = new XMLHttpRequest();
xhr.open('get', '1.json', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        dataVal = JSON.parse(xhr.responseText);
    }
};
xhr.send(null);
console.log(dataVal); //=>null   剖析：异步请求不等待请求回来数据先执行代码


//使用Promise进行异步编程代码管理
let xhr = new XMLHttpRequest;
let pro = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', '1.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let dataVal = JSON.parse(xhr.responseText);
            resolve(dataVal);
        }
        if (xhr.status !== 200) {
            //=>失败
            reject();
        }
    };
    xhr.send(null);
});

pro.then(function(resolve) {
    console.log(resolve);
    //数据绑定代码
    return 100; //=> 它返回的结果传递给第二个then...
}, function() {
    console.log('NO');

}).then(function(res) {
    //当第一个then中的函数执行完，会执行第二个
    console.log(res); //=> 100 执行第一个then返回的结果
}).then(function() {
    //当第二个then中的函数执行完，会执行第三个
});
//=> N多个then.....