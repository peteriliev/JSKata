'use strict';

function CountingSort(a) {

    var min = a.sort(function (x, y) { return x - y; })[0],
        max = a.sort(function (x, y) { return y - x; })[0];

    var counts = [], i, numNormalized;

    for (i = 0; i < a.length; i++) {
        numNormalized = a[i] - min;
        if (typeof counts[numNormalized] === 'undefined') {
            counts[numNormalized] = 1;
        } else {
            counts[numNormalized]++;
        }
    }

    var offset = 0;
    for (i = 0; i < counts.length; i++) {
        if (typeof counts[i] === 'undefined') {
            continue;
        }
        a.fill(i + min, offset, offset + counts[i]);
        offset += counts[i];
    }
}

module.exports = CountingSort;
