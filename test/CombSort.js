'use strict';

var util = require('./Util');

function sort(a) {
    var i, len = a.length, gap = len, swapped = false;

    while (swapped || gap > 1) {
        swapped = false;
        gap = Math.floor(gap / 1.3);
        if (gap < 1) {
            gap = 1;
        }

        for (i = 0; i + gap < len; i++) {
            if (a[i] > a[i + gap]) {
                util.swap(a, i, i + gap);
                swapped = true;
            }
        }
    }
}

exports.sort = sort;
