'use strict';
var util = require('./Util');

function sort(a) {
    sortInteral(a, 0, a.length - 1);
}

function sortInteral(a, start, end) {
    var len = end - start + 1, aThird = Math.floor(len / 3);
    if (len < 2) {
        return;
    }

    if (len === 2) {
        if (a[start] > a[end]) {
            util.swap(a, start, end);
        }
        return;
    }

    sortInteral(a, start, end - aThird);
    sortInteral(a, start + aThird, end);
    sortInteral(a, start, end - aThird);
}


module.exports = sort;
