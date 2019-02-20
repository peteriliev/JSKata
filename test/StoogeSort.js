'use strict';
var util = require('./Util');

function sort(a) {

    sortInternal(a, 0, a.length);
}

function sortInternal(a, start, end) {

    var len = end - start, aThird = Math.floor(len / 3);

    if (len < 2) {
        return;
    }

    if (len === 2) {
        if (a[start] > a[start + 1]) {
            util.swap(a, start, start + 1);
        }

        return;
    }

    sortInternal(a, start + aThird, end);
    sortInternal(a, start, end - aThird);
    sortInternal(a, start + aThird, end);
    //sortInternal(a, start, end - aThird);
}

module.exports = sort;
