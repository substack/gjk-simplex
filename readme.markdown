# gjk-simplex

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

# install

With [npm](https://npmjs.org) do:

```
npm install gjk-simplex
```

# license

MIT
