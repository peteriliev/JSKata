'use strict';
var util = require('./Util');

function sort(a) {
    var i, j, minIndex;

    for (i = 0; i < a.length - 1; i++) {
        minIndex = i;
        for (j = i + 1; j < a.length; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }

        util.swap(a, i, minIndex);
    }
}

exports.sort = sort;
