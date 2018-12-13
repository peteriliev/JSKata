'use strict';

function sort(a) {
    var min = a.sort(function (x, y) { return x - y; })[0],
        max = a.sort(function (x, y) { return y - x; })[0],
        maxNormalized = max - min,
        maxLen = Math.floor(Math.log10(maxNormalized)) + 1,
        buckets = [],
        len = a.length,
        r,
        sig,
        i,
        b,
        snapshot;

    for (r = 1; r <= maxLen; r++) {
        for (i = 0; i < len; i++) {
            sig = getSignificant(a[i], r);
            if (typeof buckets[sig] === 'undefined') {
                buckets[sig] = [a[i]];
            } else {
                buckets[sig].push(a[i]);
            }
        }

        snapshot = 0;
        for (b = 0; b < 10; b++) {
            if (typeof buckets[b] === 'undefined') {
                continue;
            }

            for (i = 0; i < buckets[b].length; i++) {
                a[snapshot++] = buckets[b][i];
            }

            buckets[b] = [];
        }
    }
}

function getSignificant(num, radix) {
    var divisor = Math.pow(10, radix - 1);

    return Math.floor(num / divisor) % 10;
}

exports.sort = sort;
