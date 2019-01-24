'use strict';

var util = require('./Util');

function sort(a) {
    var swapped, i, j;

    for (i = 0; i < a.length; i++) {
        swapped = false;
        for (j = a.length - 1; j - 1 >= i; j--) {
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
