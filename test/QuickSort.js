'use strict';
var swap = require('./Util');

function QuickSort(a) {
    QuickSortInternal(a, 0, a.length - 1);
}

function QuickSortInternal(a, start, end) {
    var len = end - start + 1;
    if (len < 2) {
        return;
    }

    var middle = start + Math.floor(len / 2);

    QuickSortInternal(a, start, middle - 1);
    QuickSortInternal(a, middle, end);

    merge(a, start, middle - 1, middle, end);
}

function merge(a, start1, end1, start2, end2) {
    var len = end2 - start1 + 1;
    var tmp = [],
        s1 = start1,
        s2 = start2;

    for (var i = 0; i < len; i++) {
        if (s1 > end1) {
            tmp[i] = a[s2++];
        } else if (s2 > end2) {
            tmp[i] = a[s1++];
        } else if (a[s1] < a[s2]) {
            tmp[i] = a[s1++];
        } else {
            tmp[i] = a[s2++];
        }
    }

    s1 = start1;
    for (i = 0; i < len; i++) {
        a[s1++] = tmp[i];
    }
}

module.exports = QuickSort;
