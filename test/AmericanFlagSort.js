'use strict';

var NUM_BUCKETS = 10;

function sort(a) {

    var min = a.sort(function (a, b) { return a - b; })[0];
    var max = a.sort(function (a, b) { return b - a; })[0];

    var i,
        len = a.length,
        maxNormalized = max - min,
        maxLen = Math.floor(Math.log10(maxNormalized)) + 1;

    for (i = 0; i < len; i++) {
        a[i] -= min;
    }

    sortInternal(a, 0, len, maxLen);

    for (i = 0; i < len; i++) {
        a[i] += min;
    }
}

function sortInternal(a, start, end, position) {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, d, digit, offsets = [start];
    var offset, from, to, tmp, digit, number, s, e;

    for (i = start; i < end; i++) {
        digit = getDigit(a[i], position);
        counts[digit]++;
    }

    for (i = 1; i < NUM_BUCKETS; i++) {
        offsets[i] = offsets[i - 1] + counts[i - 1];
    }

    for (d = 0; d < NUM_BUCKETS; d++) {
        while (counts[d] > 0) {
            offset = offsets[d], from = offset, number = a[from];

            do {
                digit = getDigit(number, position);
                to = offsets[digit];
                tmp = a[to];

                offsets[digit]++;
                counts[digit]--;

                a[to] = number;
                from = to;
                number = tmp;
            } while (from !== offset);
        }
    }

    if (position > 1) {
        for (d = 0; d < NUM_BUCKETS; d++) {
            s = d === 0 ? start : offsets[d - 1];
            e = offsets[d];
            if (e - s > 1) {
                sortInternal(a, s, e, position - 1);
            }
        }
    }
}

function getDigit(number, position) {
    var divisor = Math.pow(NUM_BUCKETS, position - 1);

    return Math.floor(number / divisor) % NUM_BUCKETS;
}

module.exports = sort;
