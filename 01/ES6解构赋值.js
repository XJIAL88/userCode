// class {
//     constructor() {
//         let {
//             ele,
//             url,
//             cc
//         } = options;
//         //=>把传进来的参数加载到构造函数私有
//         ['ele', 'url', 'cc'].forEach(function(item) {
//             this.item = eval(item);
//         });
//     }

// }

// let f = new Fn({
//     ele: '#box',
//     url: 'http://www.baidu.com',
//     cc: function() {
//         console.log(11);
//     }
// });


let obj = {
    // name: 'xiao',
    age: 28,
    sex: 'nan'
}

let { name = '肖佳霖', age: b, sex: c } = obj
console.log(name, b, c);


let value = { name: 'xxx', age: 25, score: [12, 23, 34, 45] };

let { name: a, age: b, score: [c, ...d] } = value;
console.log(a, b, c, d)