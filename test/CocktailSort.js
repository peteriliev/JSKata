'use strict';

var util = require('./Util');

function sort(a) {
    var len = a.length, left = 0, right = len - 1, swapped, i;

    while (left < right) {
        swapped = false;
        for (i = left; i + 1 <= right; i++) {
            if (a[i] > a[i + 1]) {
                util.swap(a, i, i + 1);
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
        right--;


        swapped = false;
        for (i = right; i - 1 >= left; i--) {
            if (a[i] < a[i - 1]) {
                util.swap(a, i, i - 1);
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
        left++;
    }
}

exports.sort = sort;
