'use strict';

var util = require('./Util');

function swap(a) {
    var i, swapped, j, len = a.length;

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

module.exports = swap;
