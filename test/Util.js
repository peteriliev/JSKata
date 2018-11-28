'use strict';

function swap(a, x, y) {
    var tmp = a[x];
    a[x] = a[y];
    a[y] = tmp;
}

exports.swap = swap;
