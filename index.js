var msum = require('convex-minkowski-sum');
var inside = require('point-in-polygon');
var dot = require('gl-matrix').vec3.dot;
var sub = require('gl-matrix').vec3.sub;

var origin = [0,0,0];
var nb = [[0,0,0],[0,0,0],[0,0,0]];
var nD = [0,0,0];
var tmpa = [0,0,0];

module.exports = function (a, b) {
    nb[0][0] = -b[0][0]; nb[0][1] = -b[0][1]; nb[0][2] = -b[0][2];
    nb[1][0] = -b[1][0]; nb[1][1] = -b[1][1]; nb[1][2] = -b[1][2];
    nb[2][0] = -b[2][0]; nb[2][1] = -b[2][1]; nb[2][2] = -b[2][2];
    
    var mdiff = msum(a, nb);
    if (!inside(origin, mdiff)) return null;
    
    var D = [];
    nD[0] = -D[0]; nD[1] = -D[1]; nD[2] = -D[2];
    
    var pa = support(D, a);
    var pb = support(nD, b);
    sub(tmpa, pa, pb);
    
    console.log('tmpa=', tmpa);
    return mdiff;
};

function support (D, pts) {
    var max = -Infinity;
    var pt = null;
    for (var i = 1; i < pts.length; i++) {
        var m = dot(D, pts[i]);
        if (m > max) {
            pt = pts[i];
            max = m;
        }
    }
    return pt;
}
