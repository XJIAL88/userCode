require('./A');
module.exports = {
    avg: function avg() {
        var ary = [].slice.call(arguments),
            len = 0;
        ary = ary.sort(function(a, b) {
            return a - b;
        }).slice(1, ary.length - 1).join('+');
        len = ary.length - 2
        ary = eval(ary) / len;
        return ary.toFixed(2)
    }
}