// Export value

define(['jquery'], function($) {

    var HelloWorldize = function(selector){
        $(selector).text('hello world from module 1.3');
    };

    return HelloWorldize;
});