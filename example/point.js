var intersect = require('../');
var a = [
    [ 0, 0, 0 ],
    [ 10, 0, 0 ],
    [ 0, 0, 10 ]
];
var b = [
    [ 4, -5, 6 ],
    [ 5, 5, 5 ],
    [ 15, 5, 15 ]
];
console.log(intersect(a, b));
