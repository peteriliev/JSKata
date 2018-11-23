'use strict';

function SelectionSort(a) {
    var swapped, len = a.length, swap = require('./Util');

    for (var i = len; i > 0; i--) {
        swapped = false;
        for (var j = 0; j + 1 < i; j++) {
            if (a[j] > a[j + 1]) {

                swap(a, j, j + 1);
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}

module.exports = SelectionSort;
