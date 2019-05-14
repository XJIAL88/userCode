var a = 5;
(function(){
    console.log(a);
})();

// (function(){
//     "use strict";
//     function fn(x){
//         arguments[0] = 100;
//         console.log(x); //=>10 不存在映射机制
//     }
//     fn(10);
// })();