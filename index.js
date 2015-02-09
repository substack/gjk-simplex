var sub = require('gl-matrix').vec3.subtract;
var triray = require('./lib/triray.js');

var d = [0,0,0];

module.exports = function (a, b) {
    var t;
    
    sub(d, b[0], b[1]);
    t = triray(a, b[0], d);
    if (t !== null) {
        console.log('01!', t);
        return;
    }
    
    sub(d, b[1], b[0]);
    t = triray(a, b[0], d);
    if (t !== null) {
        console.log('10!', t);
        return;
    }
    
    sub(d, b[1], b[2]);
    t = triray(a, b[1], d);
    if (t !== null) {
        console.log('12!', t);
        return;
    }
    
    sub(d, b[2], b[1]);
    t = triray(a, b[1], d);
    if (t !== null) {
        console.log('21!', t);
        return;
    }
    
    sub(d, b[0], b[2]);
    t = triray(a, b[0], d);
    if (t !== null) {
        console.log('02!', t);
        return;
    }
    
    sub(d, b[2], b[0]);
    t = triray(a, b[0], d);
    if (t !== null) {
        console.log('20!', t);
        return;
    }
};
