'use strict';
var util = require('./Util');

function sort(a) {
    sortInternal(a, 0, a.length - 1);
}

function sortInternal(a, start, end) {
    var len = end - start + 1;
    if (len < 2) {
        return;
    }

    if (len === 2) {
        if (a[start] > a[end]) {
            util.swap(a, start, end);
        }
        return;
    }
    var aThird = Math.floor(len / 3);
    sortInternal(a, start, end - aThird);
    sortInternal(a, start + aThird, end);
    sortInternal(a, start, end - aThird);
}

module.exports = sort;
