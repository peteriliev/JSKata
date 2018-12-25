'use strict';
var util = require('./Util');

function sort(a) {

    var i, j, minIndex, len = a.length;

    for (j = 0; j < len - 1; j++) {
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
