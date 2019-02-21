'use strict';
var util = require('./Util');

function sort(a) {
    var i, j, len = a.length, minIndex;

    for (j = 0; j < len; j++) {
        minIndex = j;

        for (i = j + 1; i < len; i++) {
            if (a[i] < a[minIndex]) {
                minIndex = i;
            }
        }

        util.swap(a, j, minIndex);
    }
}

exports.sort = sort;
