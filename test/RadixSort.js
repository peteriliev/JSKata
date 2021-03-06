'use strict';

function sort(a) {

    var i, r, digit, b, bucket, offset,
        len = a.length,
        buckets = [],
        min = a.sort(function (a, b) { return a - b; })[0],
        max = a.sort(function (a, b) { return b - a; })[0],
        maxLen = Math.floor(Math.log10(max)) + 1;

    for (r = 1; r <= maxLen; r++) {

        for (i = 0; i < len; i++) {
            digit = getDigit(a[i] - min, r);

            if (typeof buckets[digit] === 'undefined') {
                buckets[digit] = [a[i]];
            } else {
                buckets[digit].push(a[i]);
            }
        }

        offset = 0;
        for (b = 0; b < buckets.length; b++) {
            bucket = buckets[b];
            if (typeof bucket === 'undefined') {
                continue;
            }

            for (i = 0; i < bucket.length; i++) {
                a[offset++] = bucket[i];
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
