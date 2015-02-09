// https://en.wikipedia.org/wiki/M%C3%B6ller%E2%80%93Trumbore_intersection_algorithm
var sub = require('gl-matrix').vec3.sub;
var cross = require('gl-matrix').vec3.cross;
var dot = require('robust-dot-product');

var EPSILON = 0.000001;
var e1 = [0,0,0];
var e2 = [0,0,0];
var p = [0,0,0];
var q = [0,0,0];
var t = [0,0,0];

module.exports = triray;

function triray (v, o, d) {
    sub(e1, v[1], v[0]);
    sub(e2, v[2], v[0]);
    cross(p, d, e2);
    
    var det = dot(e1, p);
    if (det > -EPSILON && det < EPSILON) return null;
    
    var invDet = 1 / det;
     
    sub(t, o, v[0]);
     
    var u = dot(t, p) * invDet;
    if (u < 0 || u > 1) return null;
    
    cross(q, t, e1);
     
    var v = dot(d, q) * invDet;
    if (v < 0 || u + v  > 1) return null;
     
    var x = dot(e2, q) * invDet;
    if (x > EPSILON) {
        return x;
    }
    return null;
}
