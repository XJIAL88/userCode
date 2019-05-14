(function() {
    let each = function(obj, callback) {
        let frg = obj.length;
        if (frg) {
            for (var i = 0; i < obj.length; i++) {
                let cur = obj[i],
                    index = i;
                let res = callback && callback.call(cur, cur, index);
                if (res === false) {
                    break;
                }

            }
        } else {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    let value = obj[key],
                        res = callback && callback.call(value, value, key);
                    if (res === false) {
                        break;
                    }
                }
            }
        }
    }

    each({ name: 'xiao', age: '28', sex: 9 }, function(item, index) {
        console.log(item, index, this)
        if (index === 'age') {
            return false;
        }
    });
})()