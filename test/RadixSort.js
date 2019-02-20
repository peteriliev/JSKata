'use strict';

function sort(a) {

    var min = a.sort(function (a, b) { return a - b; })[0],
        max = a.sort(function (a, b) { return b - a; })[0],
        maxNormalized = max - min,
        maxLen = Math.floor(Math.log10(maxNormalized)) + 1,
        i, r, b, digit, offset,
        buckets = [];

    for (r = 1; r <= maxLen; r++) {
        for (i = 0; i < a.length; i++) {
            digit = getDigit(a[i] - min, r);

            if (typeof buckets[digit] === 'undefined') {
                buckets[digit] = [a[i]];
            } else {
                buckets[digit].push(a[i]);
            }
        }

        offset = 0;
        for (b = 0; b < buckets.length; b++) {
            if (typeof buckets[b] === 'undefined') {
                continue;
            }

            for (i = 0; i < buckets[b].length; i++) {
                a[offset++] = buckets[b][i];
            }
            buckets[b] = [];
        }
    }
}

function getDigit(num, position) {
    var divisor = Math.pow(10, position - 1);

    return Math.floor(num / divisor) % 10;
}

exports.sort = sort;
