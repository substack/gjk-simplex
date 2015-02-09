var gjk = require('../');
var a = [
    [ 0, 0, 0 ],
    [ 10, 0, 0 ],
    [ 0, 0, 10 ]
];
var b = [
    [ 4, -5, 5 ],
    [ 4, 5, 4 ],
    [ 15, 5, 15 ]
];
console.log(gjk(a, b));
