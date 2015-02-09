var dot = require('robust-dot-product');
var sub = require('gl-matrix').vec3.subtract;
var norm = require('gl-matrix').vec3.normalize;
var cross = require('gl-matrix').vec3.cross;

var origin = [0,0,0];

module.exports = function (a, b) {
    var simplex = [];
    var D = [ 0, 0, 1 ];
    
    simplex.push(support([], D, a, b));
    negate(D);
    
    var max = a.length * b.length;
    for (var i = 0; i <= max; i++) {
        simplex.push(support([], D, a, b));
        if (dot(simplex[simplex.length-1], D) <= 0) {
            return null;
        }
        if (containsOrigin(simplex, D)) {
            return simplex;
        }
    } 
    return null;
};

function containsOrigin (simplex, D) {
    if (simplex.length === 2) return contains2(simplex, D);
    if (simplex.length === 3) return contains3(simplex, D);
    return null;
}

function contains2 (simplex, D) {
    var A = simplex[simplex.length-1];
    var B = simplex[simplex.length-2];
    var AB = sub([], B, A);
    var A0 = sub([], origin, A);
    cross(D, cross([], AB, A0), AB);
    if (dot(D, A0) < 0) return false;
    return true;
}

function contains3 (simplex, D) {
    var A = simplex[simplex.length-1];
    var B = simplex[simplex.length-2];
    var C = simplex[simplex.length-3];
    var AB = sub([], B, A);
    var AC = sub([], C, A);
    var A0 = sub([], origin, A);
    
    var abp = cross([], cross([], AC, AB), AB);
    var acp = cross([], cross([], AB, AC), AC);
    if (dot(abp, A0) > 0) {
        simplex.splice(simplex.length - 3, 1); // remove C
        set(D, abp);
    }
    else if (dot(acp, A0) > 0) {
        simplex.splice(simplex.length - 2, 1); // remove B
        set(D, acp);
    }
    else return true;
}

function support (out, D, a, b) {
    var maxa = -Infinity, maxb = -Infinity;
    var pa = null, pb = null;
    
    for (var i = 0; i < a.length; i++) {
        var ma = dot(D, a[i]);
        if (ma > maxa) {
            pa = a[i];
            maxa = ma;
        }
        var mb = -1 * dot(D, a[i]);
        if (mb > maxb) {
            pb = b[i];
            maxb = mb;
        }
    }
    return sub(out, pa, pb);
}

function negate (x) {
    x[0] = -x[0];
    x[1] = -x[1];
    x[2] = -x[2];
    return x;
}

function set (a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    return a;
}
