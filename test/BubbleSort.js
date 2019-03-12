'use strict';

var util = require('./Util');

function sort(a) {
    var i, j, swapped, len = a.length;

    for (i = 0; i < len; i++) {
        swapped = false;
        for (j = len - 1; j - 1 >= i; j--) {
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

exports.sort = sort;
