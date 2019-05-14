module.exports = {
        sum: function sum() {
            var ary = [].slice.call(arguments),
                result = [];
            ary.forEach(element => {
                if (!isNaN(element)) {
                    result.push(element);
                }
            });
            return eval(result.join('+'));
        }
    }
    // var sum = function sum() {
    //     var ary = [].slice.call(arguments),
    //         result = [];
    //     ary.forEach(element => {
    //         if (!isNaN(element)) {
    //             result.push(element);
    //         }
    //     });
    //     return eval(result.join('+'));
    // }

// module.exports = sum;