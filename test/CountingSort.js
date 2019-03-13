'use strict';

function CountingSort(a) {

    var counts = [], i, len = a.length,
        min = a.sort(function (a, b) { return a - b; })[0],
        max = a.sort(function (a, b) { return b - a; })[0],
        offset, snapshot;

    for (i = 0; i < len; i++) {
        if (typeof counts[a[i] - min] === 'undefined') {
            counts[a[i] - min] = 1;
        } else {
            counts[a[i] - min]++;
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
