(function(window) {
    //当做工具类不提供给外面使用方法
    /*
     *let utils = {
     *   hasClass: function() {},
     *   addClass: function() {}
     *}
     */

    class TabPlugin {
        constructor(container, options = {}) {
            //->第一个必传项，而且传递的还需要是元素对象，如果匹配直接抛出异常信息，不让继续执行了（参数验证）
            if (typeof containter === 'undefined' && containter.nodeType !== 1) {
                throw new SyntaxError('第一项必传项，且还需要是元素对象');
            }

            /**=>参数初始化（初始化配置项）：把处理好的参数配置项尽可能的挂在到当类的实例上，成为实例的私有属性，
             * 这样不仅公共或者私有方法中直接获取使用，而且也保证每一个实例之间这些属性是不冲突。
             */

            /**==方法一：利用ES6结构赋值==*/
            // let {
            //     lastIndex = 0,
            //         eventType = 'mouseover',
            //         customPageClass = 'option',
            //         customContentClass = 'con',
            //         changeEnd = null
            // } = options;

            // /**剖析：forEach 中的this是window， 传参第二项为修改this， 箭头函数this是上下文中的this， 所用箭头函数方便 */
            // /**    
            //  * ['lastIndex', 'eventType', 'customPageClass', 'customContentClass', 'changeEnd'].forEach(function(item) {
            //  *      this[item] = eval(item);
            //  * }, this);
            //  */


            // ['lastIndex', 'eventType', 'customPageClass', 'customContentClass', 'changeEnd'].forEach((item => {
            //     this[item] = eval(item); //=>挂载：把每一项当做实例的私有属性设置一下即可，我们通常说是吧属性挂在到实例上。
            // }));

            /**==法二：常规写法 */
            let _default = {
                lastIndex = 0,
                eventType = 'mouseover',
                customPageClass = 'option',
                customContentClass = 'con',
                changeEnd = null
            };
            for (let attr in options) {
                if (options.hasOwnProperty(attr)) {
                    _default[attr] = options[attr]; //=>把options传递进来的信息覆盖_default，此时_default中存储的就是最新值
                }
            }
            for (let attr in _default) {
                if (_default.hasOwnProperty(attr)) {
                    this[attr] = _default[attr];
                }
            }

            //=> 获取需要操作的元素，把获取的元素也挂在到实例上
            this.container = container; //=> let childs = [].slice.call(container.children);

            /**利用ES6展开运算符 */
            let childs = [...container.children],
                option = null;

            option = childs.find(item => this.hasClass(item, this.customPageClass));
            this.optionList = option ? [...option.children] : []; //=>挂载到实例上
            this.conList = childs.filter(item => this.hasClass(item, this.customContentClass)); //=>挂载到实例上

            //=>让lastIndex 对应项选中样式，其余项没有选中样式
            this.optionList.forEach((item, index) => {
                //=>遍历当前index的索引跟传进来的索引相同，加上样式
                if (index === this.lastIndex) {
                    this.addClass(this.optionList[index], 'active');
                    this.addClass(this.conList[index], 'active');
                    return;
                    this.removeClass(this.optionList[index], 'active');
                    this.removeClass(this.conList[index], 'active');
                }
            })

            //=>实现选项卡
            this.changeTab();

        }

        /**==把公共方法挂在到类的原型上*/
        hasClass(elem, str) {
            return elem.className.trim().split(/ +/).indexOf(str) >= 0;
        }
        addClass(elem, str) {
            /*==hasClass() 不能直接调取，需要基于实例调取使用，或者直接基于类来调取使用也可以TabPlugin.prototype.hasClass()*/
            // let isExit = hasClass(elem, str);
            // if (isExit) return; //=>已经有这样样式类了，那么什么都没必要搞了
            // elem.chassName += `${str}`;

            /**==合并以上简写==*/
            if (this.hasClass(elem, str)) return;
            elem.className += `${str}`;
        }
        removeClass(elem, str) {
            // let isExit = this.hasClass(elem, str);
            // if (!isExit) return; //=>不存在这个样式类，那还搞啥！
            // let ary = elem.className.trin().split(/ +/);
            // let ary = elem.filter(item => item !== str);
            // elem.className = ary.join(' ');

            /**==合并以上简写==*/
            if (!this.hasClass(elem, str)) return;
            elem.className = elem.className.trin().split(/ +/).filter(item => item !== str).join(' ');
        }

        changeTab() {
            this.optionList.forEach((item, index) => {
                //this:实例
                let _this = this; //把实例的this保存起来确保方法中的this是当前实例
                item[`on${this.eventType}`] = function() {
                    if (lastIndex === index) return;
                    //this:当前操作LI
                    //index：当前操作LI的索引
                    _this.addClass(this, 'activ');
                    _this.removeClass(_this.optionList[_this.lastIndex], 'active');
                    _this.addClass(_this.conList[index], 'active');
                    _this.removeClass(_this.conList[_this.lastIndex], 'active');

                    _this.lastIndex = index;

                    /**
                     *切换完成后执行传递进来的回调函数(回调函数中的this是当前类的实例,
                     *把当前切换这一项索引和上一项索引传递给回调函数，还把当前操作的LI
                     *及操作的con都传给回调函数) 
                     */
                    _this.changeEnd && _this.changeEnd(this, _this.conList[index], index, lastIndex);
                }
            })

        }
    }

    window.TabPlugin = TabPlugin; //=>自执行函数形成的私有作用域，暴露给window供外面调取使用
})(window);

//=>执行：new TabPlugin([container],[options配置项对象]);

/**
 *  不确定项
 *  1. 哪个容器实现选项卡
 *  2. 默认选中项（参考值：0 第一项选中）
 *  3. 切换的事件类型（参考值：mouseover 鼠标滑过切换）
 *  4. 可以自定义页卡区域的样式类和内容区域的样式类（参考值：option / con）
 *  5. 支持钩子函数（生命周期函数），例如：我们可以支持切换完成后做生命事情，
 *     你们只需要传递给我一个回调函数，在内部插件每一次切换完成后，我把传递的回调函数执行。
 **/