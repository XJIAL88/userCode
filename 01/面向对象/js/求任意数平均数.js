
function mean(){
    var ary = [].slice.call(arguments);
    ary = ary.sort(function(a,b){return a-b}).slice(1,ary.length-1);
    return (eval(ary.join("+")) / ary.length).toFixed(2);  
}

let mean = function(...ary){
    ary.sort(function(a,b){
        return a-b;
    }).pop();
    ary.shift();
    return(eval(ary.join('+')) / ary.length).toFixed(2);
}

let value = {neme:'xxx',age:25,score:[12,23,34,45]};

// 解析成以下数据
// a = "xxx"
// b = 12
// c = [23,34,45]

// 传统写法
let a = value.name,
    b = value.score[0],
    c = value.score.slice(1);

// ES6新解构赋值写法

let {name:a,score:[b,...c]} = value;
console.log(a,b,c);