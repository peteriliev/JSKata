'use strict';

function CountingSort(a) {
    var min = a.sort(function (x, y) { return x - y; })[0],
        max = a.sort(function (x, y) { return y - x; })[0],
        counts = [],
        i,
        len = a.length, num, offset;

    for (i = 0; i < len; i++) {
        num = a[i] - min;
        if (typeof counts[num] === 'undefined') {
            counts[num] = 1;
        } else {
            counts[num]++;
        }
    }

    offset = 0;
    for (i = 0; i < counts.length; i++) {
        if (typeof counts[i] === 'undefined') {
            continue;
        }
        a.fill(i + min, offset, offset + counts[i]);
        offset += counts[i];
    }
}

module.exports = CountingSort;
