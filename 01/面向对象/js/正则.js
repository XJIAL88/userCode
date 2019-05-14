let reg = /^1[2-5]9$/
console.log(reg.test(13));

//=============

RegExp.prototype.myExecAll = function(str) {
    let result = [],
        ExecAry = this.exec(str);
    //为了防止出现死循环：我们检测一下正则是否加g，没有加g只把第一次捕获的返回即可。
    if (!this.global) {
        return this.exec(str);
    }
    while (ExecAry) {
        result.push(ExecAry[0]);
        ExecAry = this.exce(str);
    }
    return result;
}
console.log(reg.myExecAll(str));

//=============

String.prototype.myTimeFormat = function myTimeFormat(template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
    let ary = this.match(/\d+/g).map((item => item < 10 ? "0" + item : item));
    return template.replace(/\{(\d)}/g, (...[, index]) => ary[index] || '00'); // 如果没有则为00代替
}

let str = '2019/4/30 18:30:23';
console.log(str.myTimeFormat('{1}月{2}日'));
console.log(str.myTimeFormat('{1}-{2} {3}:{4}'));