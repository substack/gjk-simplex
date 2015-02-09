var msum = require('convex-minkowski-sum');
var inside = require('point-in-polygon');

var origin = [0,0,0];
var nb = [[0,0,0],[0,0,0],[0,0,0]];

module.exports = function (a, b) {
    nb[0][0] = -b[0][0];
    nb[0][1] = -b[0][1];
    nb[0][2] = -b[0][2];
    nb[1][0] = -b[1][0];
    nb[1][1] = -b[1][1];
    nb[1][2] = -b[1][2];
    nb[2][0] = -b[2][0];
    nb[2][1] = -b[2][1];
    nb[2][2] = -b[2][2];
    
    var mdiff = msum(a, nb);
    if (!inside(origin, mdiff)) return null;
    return mdiff;
};
