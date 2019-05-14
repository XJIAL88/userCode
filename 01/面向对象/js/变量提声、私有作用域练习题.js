console.log(a); // => undefined
var a = 12;

function fn() {
    console.log(a); //=> undefined
    var a = 13;
}

fn();
console.log(a); //=> 12;

//=================

console.log(a); // => undefined
var a = 12;

function fn() {
    console.log(a); //=> 12
    a = 13;
}

fn();
console.log(a); //=> 13;

//=================

console.log(a); //=> a is not difined
a = 12;

function fn() {
    console.log(a);
    a = 13;
}

fn();
console.log(a);

//=================

var foo = 1;

function bar() {
    /**
     * 形参赋值:无
     * 变量提声：var foo
     * (不管条件是否成立，都要进行变量提声，新流量器中对于判断体中的函数只是提前声明);
     */
    if (!foo) { //=> !undefined => true
        var foo = 10;
    }
    console.log(foo); // => 10
}
bar();

//=================

var n = 0;

function a() {
    var n = 10;

    function b() {
        n++;
        console.log(n); //=>11
    }
    b();
    return b;
}
var c = a();
c(); //=>12;
console.log(n); //=>0

//=================

var a = 10,
    b = 11,
    c = 12;

function test(a) {
    a = 1;
    var b = 2;
    c = 3;
}

test(10);
console.log(a); //=>10
console.log(b); //=>11
console.log(c); //=>3

//=================

if (!('a' in window)) {
    var a = 1;
}
console.log(a); //=> undefined

//=================

var a = 4;

function b(x, y, a) {
    console.log(a); // =>3
    arguments[2] = 10; //arguments 非严格模式存在映射机制
    console.log(a); //=>10
}
a = b(1, 2, 3); // a = b执行的结果  => a = undefined 【函数b并没有写return，所以默认函数的返回值是undefined】

//=================

function fn(x, y) {
    /**
     * 形参
     * x = 10;
     * y = undefined
     * 
     * arguments
     * 0:10
     * length:1
     */
    var agr = arguments;
    arg[0] = 100; //=>100
    console.log(x);
    y = 200;
    console.log(arg[1]); //undefined
}
fn(10);

//=================

var foo = 'hello';
(function(foo) {
    console.log(foo); // => hello;
    var foo = foo || 'world';
    console.log(foo); //=>hello;
})(foo);
console.log(foo); //=>hello;

//=================

var a = 9;

function fn() {
    a = 0;
    return function(b) {
        return b + a++;
    }
}
var f = fn();

console.log(f(5)); //=>5
console.log(fn()(5)); //=>5
console.log(f(5)); //=>6
console.log(a); //=>2

//=================

var ary = [1, 2, 3, 4];

function fn(ary) {
    ary = [100]
    ary[0] = 0;
    ary = [0];
    ary[0] = 100;
    return ary;
}

var res = fn(ary);
console.log(ary); //=>[1,2,3,4]
console.log(res); //=>[100]

//=================

function fn(i) {
    return function(n) {
        console.log(n + (i++));
    }
}

var f = fn(10);
f(20); // =>30
fn(20)(40); //=>60
fn(30)(50); //=>80
f(30); //=>41

//=================

var i = 10;

function fn() {
    return function(n) {
        console.log(n + (++i));
    }
}

var f = fn(10);
f(20); // =>31
fn()(20); //=>32
fn()(30); //=>43
f(30); //=>44

//=================

var num = 10;
var obj = { num: 20 };
obj.fn = (function(num) {
    this.num = num * 3;
    num++;
    return function(n) {
        this.num += n;
        num++;
        console.log(num);
    }
})(obj.num);
var fn = obj.fn;
fn(5); //=>22
obj.fn(10); //=>23
console.log(num, obj.num); //=> 65,30

//=================

var num = 10;
var obj = { num: 20 };
obj.fn = (function(num) {
    num = this.num + 10;
    this.num = num + 10;
    return function(n) {
        this.num += ++num;
    }
})(num);
var fn = obj.fn;
fn();
obj.fn();
console.log(num, obj.num); // => 51,42

//=================

var fullName = "language";
var obj = {
    fullName: 'javascript',
    prop: {
        getFullName: function() {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName()); //=> this 是 this.prop => prop里面没有fullName的属性，所以属性值为：undefined
var test = obj.prop.getFullName;
console.log(test()); // =>'language';

//=================

var name = "window";
var Tom = {
    name: "Tom",
    show: function() {
        console.log(name);
    },
    wait: function() {
        var fun = this.show;
        fun();
    }
};
Tom.wait(); //=> window.name;ES5 全局变量和 window 存在映射机制

//=================

function fun() {
    this.a = 0;
    this.b = function() {
        alert(this.a);
    }
}

fun.prototype = {
    b: function() {
        this.a = 20;
        alert(this.a);
    },
    c: function() {
        this.a = 30;
        alert(this.a);
    }
};

var my_fun = new fun();
my_fun.b(); //=>0;
my_fun.c(); //=>30; 

//阿里面试题
function Foo() {
    getName = function() {
        console.log(1);
    }
    return this;
}
Foo.getName = function() {
    console.log(2);
}

Foo.prototype.getName = function() {
    console.log(3);
}

var getName = function() {
    console.log(4);
}

function getName() {
    console.log(5);
}

Foo.getName(); //=> 2 Foo当做一个对象，找Foo当做一个对象，找Foo的私有方法执行
getName(); // =>4 执行全局下的getName
Foo().getName(); //=>1 先把Foo当做普通函数执行
getName() //=>1 执行全局下的getName
new Foo.getName(); // => 2 A:(Foo.getName) => nwe A();
new Foo().getName(); //=>3 B:new Foo() => B.getName();
new new Foo().getName(); //=>3 C:new Foo(); new C(c的实例).getName() => new D()