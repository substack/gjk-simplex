# gjk-simplex

NOT YET READY FOR USE.

* get segment and triangle cases working properly
* implement tetrahedron case

---

calculate the simplex of two shapes using the
[Gilbert-Johnson-Keerthi distance algorithm][0]

Implementation based on [this writeup by William Bittle][1].

[0]: https://en.wikipedia.org/wiki/Gilbert%E2%80%93Johnson%E2%80%93Keerthi_distance_algorithm
[1]: http://www.dyn4j.org/2010/04/gjk-gilbert-johnson-keerthi/

# example

``` js
var gjk = require('gjk-simplex');
var a = [
    [ 0, 0, 0 ],
    [ 15, 4, 2 ],
    [ 4, 2, 11 ]
];
var b = [
    [ 5, -1, 6 ],
    [ -3, 10, 4 ],
    [ 9, 13, 14 ]
];
console.log(gjk(a, b));
```

# methods

``` js
var gjk = require('gjk-simplex')
```

## var simplex = gjk(a, b)

Compute the `simplex` of convex polygons `a` and `b`.

If `a` and `b` do not intersect, return `null`.

# install

With [npm](https://npmjs.org) do:

```
npm install gjk-simplex
```

# license

MIT
