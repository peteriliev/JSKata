'use strict';

function bubbleSort(a) {
    var len = a.length,
        minIndex, swap = require('./Util');
    for (var i = 0; i < len; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }

        swap(a, i, minIndex);
    }
}

module.exports = bubbleSort;
