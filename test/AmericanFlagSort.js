'use strict';

var NUM_BUCKETS = 10;

function sort(a) {

    var min = a.sort(function (a, b) { return a - b; })[0],
        max = a.sort(function (a, b) { return b - a; })[0],
        i, radix, len = a.length, maxLen,
        maxNormalized = max - min;

    maxLen = Math.floor(Math.log10(maxNormalized)) + 1;

    for (i = 0; i < len; i++) {
        a[i] -= min;
    }

    sortInternal(a, 0, len, maxLen);

    for (i = 0; i < len; i++) {
        a[i] += min;
    }
}

function sortInternal(a, start, end, radix) {

    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], offsets = [start, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, significant, b, num, tmp, from, to, offset, s, e;

    for (i = start; i < end; i++) {
        significant = getSignificant(a[i], radix);
        counts[significant]++;
    }

    for (i = 1; i < NUM_BUCKETS; i++) {
        offsets[i] = offsets[i - 1] + counts[i - 1];
    }

    for (b = 0; b < NUM_BUCKETS; b++) {
        while (counts[b] > 0) {
            offset = offsets[b], from = offset, num = a[from];

            do {
                significant = getSignificant(num, radix);
                to = offsets[significant];
                tmp = a[to];

                a[to] = num;
                offsets[significant]++;
                counts[significant]--;

                num = tmp;
                from = to;
            } while (from !== offset);

        }
    }

    if (radix > 1) {

        for (b = 0; b < NUM_BUCKETS; b++) {
            s = b === 0 ? start : offsets[b - 1];
            e = offsets[b];
            if (e - s > 1) {
                sortInternal(a, s, e, radix - 1);
            }
        }
    }
}

function getSignificant(num, radix) {

    var divisor = Math.pow(NUM_BUCKETS, radix - 1);

    return Math.floor(num / divisor) % NUM_BUCKETS;
}

module.exports = sort;
