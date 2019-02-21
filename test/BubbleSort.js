'use strict';

var util = require('./Util');

function sort(a) {
    var i, len = a.length, j, swapped;

    for (j = len; j > 0; j--) {
        swapped = false;
        for (i = 0; i + 1 < j; i++) {
            if (a[i] > a[i + 1]) {
                util.swap(a, i, i + 1);
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}

exports.sort = sort;
