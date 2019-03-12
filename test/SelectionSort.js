'use strict';
var util = require('./Util');

function sort(a) {

    var i, j, len = a.length, minIndex;

    for (i = 0; i < len - 1; i++) {

        minIndex = i;

        for (j = i + 1; j < len; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }

        util.swap(a, i, minIndex);
    }
}

exports.sort = sort;
