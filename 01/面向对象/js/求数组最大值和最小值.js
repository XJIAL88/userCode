
//排序法
let ary = [12, 13, 14, 23, 24, 13, 15, 12];
let max = ary.sort(function (a, b) { return a - b })[0];

假设法

// var max = ary[0];
for (var i = 0; i < ary.length; i++) {
    max < ary[i] ? max = ary[i] : null;
}

// 数学函数Math.max();
var ary = [12, 13, 14, 23, 24, 13, 15, 12];
eval("Math.max("+ary.join(',')+")");

//利用apply的特征，虽然放的是一个数组，但是执行方法的时候，也是吧数组中的每一项一个个转给函数
var ary = [12, 13, 14, 23, 24, 13, 15, 12];
Math.max.apply(null,ary);
