//=> ES6继承
class A {
    constructor() {
        this.aa = 100;
    }
    getX() {
        console.log(1);
    }
}

class B extends A {
    constructor() {
        super();
        this.bb = 200;
    }
    getY() {
        console.log(2);
    }
}

let f = new B();
console.log(f);