var msum = require('convex-minkowski-sum');
//var inside = require('point-in-polygon');
var dot = require('robust-dot-product');
var sub = require('gl-matrix').vec3.sub;
var cross = require('gl-matrix').vec3.cross;

var origin = [0,0,0];
var nb = [[0,0,0],[0,0,0],[0,0,0]];
var nD = [0,0,0];
var tmpa = [0,0,0];
var tmpb = [0,0,0];
var tmpc = [0,0,0];
var tmpd = [0,0,0];
var pts = [null,null,null,null];

module.exports = function (a, b) {
    sub(nb[0], origin, b[0]);
    sub(nb[1], origin, b[1]);
    sub(nb[2], origin, b[2]);
    
    var mdiff = msum(a, nb);
    //if (!inside(origin, mdiff)) return null;
    
    var D = [ 0, 0, 1 ];
    var S = support(tmpa, D, a, b);
    sub(D, origin, S);
    var pts = [ S ];
    
    for (var i = 1; i <= 10; i++) {
        var A = support(tmpa, D, a, b);
console.log(A); 
        if (dot(A, D) < 0) return null; // no intersection
        pts.push(copy(A));
        var r = evolve(pts[pts.length-1], pts[pts.length-2], D);
        if (r) {
            console.log('!!!', r);
            break;
        }
        else {
            sub(D, origin, pts[pts.length-1]);
        }
    }
    
    return mdiff;
};

function evolve (a, b, D) {
    var ab = sub(tmpa, b, a);
    var a0 = sub(tmpb, origin, a);
    if (dot(ab, a0) > 0) {
        return cross(tmpc, ab, cross(tmpd, a0, ab));
    }
}

function support (out, D, a, b) {
    var maxa = -Infinity;
    var maxb = -Infinity;
    var pa = null, pb = null;
    
    for (var i = 1; i < a.length; i++) {
        var ma = dot(D, a[i]);
        var mb = -dot(D, b[i]);
        if (ma > maxa) {
            pa = a[i];
            maxa = ma;
        }
        if (mb > maxb) {
            pb = b[i];
            maxb = mb;
        }
    }
    return sub(out, pa, pb);
}

function copy (x) { return x.slice() }
