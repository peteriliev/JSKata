'use strict';
var swap = require('./Util');

function MergeSort(a) {
    MergeSortInternal(a, 0, a.length - 1);
}

function MergeSortInternal(a, start, end) {
    var len = end - start + 1;
    if (len < 2) {
        return;
    }

    var left = start,
        right = end,
        pivot = left;

    while (left < right) {
        while (left < right && a[right] >= a[pivot]) {
            right--;
        }

        if (left < right) {
            swap(a, right, pivot);
            pivot = right;
            left++;
        }

        while (right > left && a[left] <= a[pivot]) {
            left++;
        }

        if (right > left) {
            swap(a, left, pivot);
            pivot = left;
            right++;
        }
    }

    MergeSortInternal(a, start, pivot - 1);
    MergeSortInternal(a, pivot + 1, end);
}

module.exports = MergeSort;
