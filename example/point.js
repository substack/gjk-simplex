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
/*
var start = Date.now();
var out = [];
for (var i = 0; i < 1000; i++) {
    intersect(out, a, b);
}
console.log((Date.now() - start) / i);
*/
console.log(intersect(a, b));
