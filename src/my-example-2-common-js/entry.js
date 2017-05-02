require("./style.css");
// require('./moduleB');
var multiply = require('./moduleA'); //exports by function

document.write(require("./content.js"));
document.write('multiply result is' + multiply(4));