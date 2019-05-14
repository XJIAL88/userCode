function Fn() {
    var n = 100;
    this.AA = function () {
        console.log('AA[私]');
    }
    this.BB = function () {
        console.log('BB[私]');
    }
}

Fn.prototype.AA = function () { //给公用设置公有属性
    console.log('AA[公]');
}

var f1 = new Fn;
var f2 = new Fn;

f1.__proto__.BB = function () { //给公用设置公有属性
    console.log('BB[公]');
}

console.log(f1.n); // =>undefined
console.log(f1.AA === f2.AA); //=> false
console.log(f1.__proto__.AA === f2.__proto__.AA); //=> true
console.log(f1.__proto__.AA === Fn.prototype.AA); //=> true
console.log(f1.hasOwnProperty === Fn.hasOwnProperty); //=> true