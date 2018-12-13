'use strict';

var util = require('./Util');

function sort(a) {
    sortInternal(a, 0, a.length - 1);
}

function sortInternal(a, start, end) {

    var left = start, right = end, pivot = left, pivotVal = a[pivot];

    if (start >= end) {
        return;
    }

    while (left < right) {
        while (right > left && a[right] >= pivotVal) {
            right--;
        }

        if (right > left) {
            util.swap(a, pivot, right);
            pivot = right;
            left++;
        }

        while (left < right && a[left] <= pivotVal) {
            left++;
        }

        if (left < right) {
            util.swap(a, pivot, left);
            pivot = left;
            right--;
        }
    }

    sortInternal(a, start, pivot - 1);
    sortInternal(a, pivot + 1, end);
}

exports.sort = sort;
