;
(function() {
    function AJAX(options) {
        return new init(options);
    };

    function init(options) {

    }

    AJAX.prototype = {
        constructor: AJAX,
        init: init
    }
    console.log(AJAX.prototype.init);
    init.prototype = AJAX.prototype;

    window.ajax = AJAX;
})();
ajax(); //相当于AJAX的实例