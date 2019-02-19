'use strict';

function CountingSort(a) {

    var len = a.length,
        i,
        min = a.sort(function (a, b) { return a - b; })[0],
        max = a.sort(function (a, b) { return b - a; })[0],
        counts = [], num, offset;

    for (i = 0; i < len; i++) {
        num = a[i] - min;
        if (typeof counts[num] === 'undefined') {
            counts[num] = 1;
        } else {
            counts[num]++;
        }
    }
    //console.info('counts = ' + counts);
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
