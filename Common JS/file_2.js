let {a : x} = require('./file_1');
let {a : y} = require('./file_3');
let sum = require('./file_4');

console.log(sum(x, y));