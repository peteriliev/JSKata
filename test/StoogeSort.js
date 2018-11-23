'use strict';

function sort(a) {

    sortInternal(a, 0, a.length - 1);
}

function sortInternal(a, start, end) {

    var len = end - start + 1,
        swap = require('./Util'),
        aThird = Math.floor(len / 3);

    if (len < 2) {
        return;
    }

    if (len === 2) {
        if (a[start] > a[end]) {
            swap(a, start, end);
        }
        return;
    }

    sortInternal(a, start, end - aThird);
    sortInternal(a, start + aThird, end);
    sortInternal(a, start, end - aThird);
}

module.exports = sort;
