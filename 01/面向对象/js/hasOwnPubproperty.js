function hasPubProperty(obj, attr) {
    // obj:要检测的对象
    // attr:要检测的属性
    //公有属性是返回true，否则返回false
    if (obj.hasOwnProperty(attr) || obj.hasOwnProperty(obj[name])) {
        return false;
    } else {
        return true;
    }

}


var obj = {
    name: '姓名'
}

function Fn() {
    this.name = name;
}

var f = new Fn;
console.log(obj.hasOwnProperty('cc'))

console.log(hasPubProperty(obj, 'cc'));

console.log(hasPubProperty(f, 'toString'));


let xhr = new XMLHttpRequest;
xhr.open('get', '', fase);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(xhr.responseText)
    }
}
xhr.send(null);