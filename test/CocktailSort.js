'use strict';

var util = require('./Util');

function sort(a) {

    var left = 0, right = a.length, swapped, i;

    while (left < right - 1) {
        swapped = false;
        for (var i = left; i + 1 < right; i++) {
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
        for (var i = right; i - 1 >= left; i--) {
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
