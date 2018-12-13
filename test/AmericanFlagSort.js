'use strict';

var NUM_BUCKETS = 10;

function sort(a) {
    var min = a.sort(function (x, y) { return x - y; })[0], i, len = a.length;
    var max = a.sort(function (x, y) { return y - x; })[0],
        maxNormalized = max - min,
        maxLen = Math.floor(Math.log10(maxNormalized)) + 1;

    for (i = 0; i < len; i++) {
        a[i] -= min;
    }

    sortInternal(a, 0, a.length, Math.pow(NUM_BUCKETS, maxLen - 1));

    for (i = 0; i < len; i++) {
        a[i] += min;
    }
}

function sortInternal(a, start, end, divisor) {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], offsets = [], b, i;
    var num, significant, from, offset, to, tmp, s, e;

    for (i = start; i < end; i++) {
        significant = getSignificant(a[i], divisor);
        counts[significant]++;
    }
    offsets[0] = start;
    for (i = 1; i < NUM_BUCKETS; i++) {
        offsets[i] = offsets[i - 1] + counts[i - 1];
    }

    for (b = 0; b < NUM_BUCKETS; b++) {
        while (counts[b] > 0) {
            offset = offsets[b], from = offset; num = a[from];

            do {

                significant = getSignificant(num, divisor);
                to = offsets[significant];
                tmp = a[to];

                counts[significant]--;
                offsets[significant]++;

                a[to] = num;
                num = tmp;
                from = to;
            } while (from !== offset);
        }
    }

    if (divisor > 1) {
        for (b = 0; b < NUM_BUCKETS; b++) {
            s = b === 0 ? start : offsets[b - 1];
            e = offsets[b];
            if (e - s > 1) {
                sortInternal(a, s, e, divisor / NUM_BUCKETS);
            }
        }
    }
}

function getSignificant(number, divisor) {
    return Math.floor(number / divisor) % NUM_BUCKETS;
}

module.exports = sort;
