
// introduction of jquery automatically!!
// Named module
define('myModule', ['jquery'], function($) {
    // $ is the export of the jquery module.
    $('body').text('hello world from module 1.1');
});
// and use it
require(['myModule'], function(myModule) {});

