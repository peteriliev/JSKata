'use strict';

function sort(a) {

    var min = a.sort(function (x, y) { return x - y; })[0],
        max = a.sort(function (x, y) { return y - x; })[0];

    var maxNormalized = max - min,
        maxLen = Math.floor(Math.log10(maxNormalized)) + 1;

    var buckets = [], r, bucket, i, j, offset, digit;

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
        for (i = 0; i < buckets.length; i++) {
            bucket = buckets[i];
            if (typeof bucket === 'undefined') {
                continue;
            }

            for (j = 0; j < bucket.length; j++) {
                a[offset++] = bucket[j];
            }
            buckets[i] = [];
        }

    }
}

function getDigit(num, position) {
    var divisor = Math.pow(10, position - 1);
    return Math.floor(num / divisor) % 10;
}

exports.sort = sort;
