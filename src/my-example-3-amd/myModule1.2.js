
// 2. multiple depedencies
define(['jquery', './math.js'], function($, math) {
    // $ and math are the exports of the jquery module.
    $('body').text('hello world from module 1.2');
});

