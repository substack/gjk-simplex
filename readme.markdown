# triangle-triangle-intersection-3d

compute the intersection, if any, between 2 triangles in 3 dimensions
using GJK

[0]: http://www.cs.sjsu.edu/faculty/pollett/masters/Semesters/Spring12/josh/GJK.html

# example

``` js
var intersect = require('triangle-triangle-intersection-3d');
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
console.log(intersect(a, b));
```

# methods

``` js
var intersect = require('triangle-triangle-intersection-3d')
```

## var pt = intersect(a, b)

Return the intersection `pt` of triangles `a` and `b`.
If there is no intersection, return `null`.

`a` and `b` are arrays of `[x,y,z]` coordinate arrays
and `pt` is an `[x,y,z]` coordinate array.

# install

With [npm](https://npmjs.org) do:

```
npm install triangle-triangle-intersection-3d
```

# license

MIT
