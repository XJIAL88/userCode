var getCss = function(curEle, attr) {
    if ('getComputed' in window) {
        var val = window.getComputedStyle(curEle, null)[attr];
        var reg = /^-?\d+(\.\d+)?(px|rem|pt|em)?$/i
        reg.test(val) ? val = parseFloat(val) : null;
        return val;
    }
    throw new SyntaxError('浏览器版本过低！')
}