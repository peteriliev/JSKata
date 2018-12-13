'use strict';

var util = require('./Util');

function sort(a) {
    sortInternal(a, 0, a.length - 1);
}

function sortInternal(a, start, end) {

    var len = end - start + 1, middle = start + Math.floor(len / 2);

    if (len < 2) {
        return;
    }

    sortInternal(a, start, middle - 1);
    sortInternal(a, middle, end);

    merge(a, start, middle - 1, middle, end);
}

function merge(a, start1, end1, start2, end2) {
    var s1 = start1, s2 = start2, tmp = [], len = end2 - start1 + 1, i;

    for (i = 0; i < len; i++) {

        if (s1 > end1) {
            tmp.push(a[s2++]);

        } else if (s2 > end2) {
            tmp.push(a[s1++]);

        } else if (a[s1] < a[s2]) {
            tmp.push(a[s1++]);

        } else {
            tmp.push(a[s2++]);
        }
    }

    s1 = start1;
    for (i = 0; i < len; i++) {
        a[s1++] = tmp[i];
    }
}

exports.sort = sort;
