var msum = require('convex-minkowski-sum');
var closest = require('polytope-closest-point');

var origin = [0,0,0];
var nb = [[0,0,0],[0,0,0],[0,0,0]];
var cell = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];

module.exports = function (out, a, b) {
    pnegate(nb, b);
    var mdiff = msum(a, nb);
    var sqd = closest(cell, mdiff, origin, out);
    if (sqd > 1e-6) return null;
    
    return out;
};

function pnegate (out, p) {
    out[0][0] = -p[0][0]; out[0][1] = -p[0][1]; out[0][2] = -p[0][2];
    out[1][0] = -p[1][0]; out[1][1] = -p[1][1]; out[1][2] = -p[1][2];
    out[2][0] = -p[2][0]; out[2][1] = -p[2][1]; out[2][2] = -p[2][2];
}
