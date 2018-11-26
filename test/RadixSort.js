'use strict';

function sort(a) {
    var min = a.sort(function (a, b) { return a - b; })[0],
        max = a.sort(function (a, b) { return b - a; })[0],
        maxNormalized = max - min,
        maxLen = Math.floor(Math.log10(maxNormalized)) + 1,
        buckets = [], bucket, i, j, k, significant, offset;

    for (i = 1; i <= maxLen; i++) {

        for (j = 0; j < a.length; j++) {
            significant = getSignificant(a[j] - min, i);
            if (typeof buckets[significant] === 'undefined') {
                buckets[significant] = [a[j]];
            } else {
                buckets[significant].push(a[j]);
            }
        }

        offset = 0;
        for (j = 0; j < 10; j++) {
            bucket = buckets[j];
            if (typeof buckets[j] === 'undefined') {
                continue;
            }

            for (k = 0; k < bucket.length; k++) {
                a[offset++] = bucket[k];
            }
            buckets[j] = [];
        }
    }
}

function getSignificant(num, radix) {
    var divisor = Math.pow(10, radix - 1);

    return Math.floor(num / divisor) % 10;
}

module.exports = sort;
