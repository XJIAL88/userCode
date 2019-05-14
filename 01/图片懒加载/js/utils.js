let utils = (function() {
    let getCss = function(ele, attr) {
        if (!'getComputedStyle' in window) return;
        let reg = /^(-?\d+)(?:px|rem|em|pt|deg)$/g,
            val = window.getComputedStyle(ele, null)[attr];
        return reg.test(val) ? val = parseFloat(val) : null;
    }
    let setCss = function(ele, attr, val) {
        let reg = /^(width|height|((margin|padding)?(top|right|bottom|left)?))$/i;
        if (!isNaN(val)) {
            reg.test(attr) ? ele['style'][attr] = val + 'px' : null;
        } else {
            ele['style'][attr] = val
        }
    }
    let cssWhole = function(ele, obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                setCss(ele, key, obj[key]);
            }
        }
    }
    let css = function css(...arg) {
        let fn = getCss;
        if (typeof arg[1] === 'object' && arg.length === 2) {
            fn = cssWhole;
        } else if (arg.length === 3) {
            fn = setCss;
        } else {
            fn = getCss;
        }
        return fn(...arg);
    }
    return {
        css: css
    }
    let animation = function() {
        //t:time当前运动的时间
        //d:duration总时间
        //b:begin起始位置
        //c:change总距离 (target-begin)
        t / d * c + b
        setInterval()

    }


})()