'use strict';

function CountingSort(a) {

    var min = a.sort(function (a, b) { return a - b; })[0];
    var max = a.sort(function (a, b) { return b - a; })[0];
    var counts = [];

    for (var i = 0; i < a.length; i++) {

        if (typeof counts[a[i] - min] === 'undefined') {
            counts[a[i] - min] = 1;
        } else {
            counts[a[i] - min]++;
        }
    }

    var snapshot = 0;
    for (i = 0; i < counts.length; i++) {
        if (typeof counts[i] === 'undefined') {
            continue;
        }
        a.fill(i + min, snapshot, snapshot + counts[i]);
        snapshot += counts[i];
    }
}

module.exports = CountingSort;
