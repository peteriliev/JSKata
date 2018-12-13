'use strict';

var util = require('./Util');

function swap(a) {
    var last = a.length - 1, i, j, swapped;

    for (i = last; i >= 0; i--) {
        swapped = false;

        for (j = last; j - 1 >= 0; j--) {
            if (a[j] < a[j - 1]) {
                util.swap(a, j, j - 1);
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}

module.exports = swap;
