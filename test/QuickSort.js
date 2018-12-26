'use strict';

var util = require('./Util');

function sort(a) {
    sortInternal(a, 0, a.length - 1);
}

function sortInternal(a, start, end) {
    var len = end - start + 1;
    if (len < 2) {
        return;
    }

    var left = start, right = end, pivot = left;

    while (left < right) {
        while (right > left && a[right] >= a[pivot]) {
            right--;
        }

        if (right > left) {
            util.swap(a, right, pivot);
            pivot = right;
            left++;
        }

        while (left < right && a[left] <= a[pivot]) {
            left++;
        }

        if (left < right) {
            util.swap(a, left, pivot);
            pivot = left;
            right--;
        }
    }

    sortInternal(a, start, pivot - 1);
    sortInternal(a, pivot + 1, end);
}

exports.sort = sort;
