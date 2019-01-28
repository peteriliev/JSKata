'use strict';

function sort(a) {
    var min = a.sort(function (a, b) { return a - b; })[0],
        max = a.sort(function (a, b) { return b - a; })[0],
        maxNormalized = max - min,
        maxLen = Math.floor(Math.log10(maxNormalized)) + 1,
        i, len = a.length,
        buckets = [], bucket, b, digit, index;

    for (var r = 1; r <= maxLen; r++) {

        for (i = 0; i < len; i++) {
            digit = getDigit(a[i] - min, r);

            if (typeof buckets[digit] === 'undefined') {
                buckets[digit] = [a[i]];
            } else {
                buckets[digit].push(a[i]);
            }
        }

        index = 0;
        for (i = 0; i < 10; i++) {
            bucket = buckets[i];

            if (typeof bucket === 'undefined') {
                continue;
            }

            for (b = 0; b < bucket.length; b++) {
                a[index++] = bucket[b];
            }

            buckets[i] = [];
        }
    }
}

function getDigit(number, position) {
    var divisor = Math.pow(10, position - 1);

    return Math.floor(number / divisor) % 10;
}

exports.sort = sort;
