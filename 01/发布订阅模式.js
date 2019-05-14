(function anonymous(window) {
    class Subscribe {
        constructor() {
            //=>创建一个容器，（每一个实例都有一个自己独有的容器，管理自己需要执行的方法即可）
            this.pond = [];
        };
        //=>向计划表（pond池子）中增加方法：去重
        //Fn:我们需要增加的方法
        add(fn) {
            let pond = this.pond;
            let isExist = false;
            pond.forEach(item => {
                item === fn ? isExist = true : null;
            });
            !isExist ? pond.push(fn) : null;
        };
        //=>向计划表（pond池子）中移出方法
        //Fn:我们需要移出的方法
        remove(fn) {
            let pond = this.pond;
            pond.forEach((item, index) => {
                if (item === fn) {
                    //pond.splice(index,1); //=>我们不能基于splice删除,会引起数组塌陷问题
                    /**=>解决:让当前赋值为null即可(这样函数移出掉了,但是此时的数组结构没有变,不会出现数组塌陷的问题)*/
                    pond[index] = null; //=>item=null是不行的,因为item是forEach遍历出来的值赋值给item,而不是数组的当前项。
                }
            });
        };
        //=>通知计划表中的方法依次执行
        /**nunll的话不执行，而且最好是吧这一项删除 */
        fire(...arg) {
            let pond = this.pond;
            for (let i = 0; i < pond.length; i++) {
                let item = pond[i];
                if (item === null) {
                    pond.splice(i, 1);
                    i--;
                    continue;
                };
                item(...arg);
            }

        };

    };

    window.Subscribe = Subscribe;
})(window);


let cc = new Subscribe(); //=>创建一个池子计划表的实例


let f1 = function(X, Y) {
    console.log(1, X, Y);
}
let f2 = function() {
    console.log(2);
    cc.remove(f1);
}
let f3 = function() {
    console.log(3);
}

cc.add(f1);
cc.add(f2);
cc.add(f3);
cc.add(f2);
cc.add(f2);
cc.add(f1);


cc.remove();
setInterval(() => {
    cc.fire(100, 200);
}, 3000);


/**
 * subscribe.add(); //=>增加方法
 * subscribe.remove(); //=>移除方法
 * subscribe.fire(); //=>通知执行
 */