'use strict';
var util = require('./Util');

function sort(a) {
    var last = a.length - 1, i, j, maxIndex;

    for (i = last; i > 0; i--) {
        maxIndex = i;

        for (j = i - 1; j >= 0; j--) {
            if (a[j] > a[maxIndex]) {
                maxIndex = j;
            }
        }

        util.swap(a, i, maxIndex);
    }
}

exports.sort = sort;
