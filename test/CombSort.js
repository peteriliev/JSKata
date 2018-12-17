'use strict';
var util = require('./Util');

function sort(a) {
    var gap = a.length, swapped = false, i;

    while (gap > 1 || swapped) {
        gap = Math.floor(gap / 1.3);
        if (gap < 1) {
            gap = 1;
        }
        swapped = false;
        for (i = 0; i + gap < a.length; i++) {
            if (a[i] > a[i + gap]) {
                util.swap(a, i, i + gap);
                swapped = true;
            }
        }
    }
}

exports.sort = sort;
