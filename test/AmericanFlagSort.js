'use strict';

var NUM_BUCKETS = 10;

function sort(a) {
    var min = a.sort(function (x, y) { return x - y; })[0];
    var max = a.sort(function (x, y) { return y - x; })[0];
    var maxNormalized = max - min;
    var maxLen = Math.floor(Math.log10(maxNormalized)) + 1;
    var i;

    for (i = 0; i < a.length; i++) {
        a[i] -= min;
    }

    sortInternal(a, 0, a.length, maxLen);

    for (i = 0; i < a.length; i++) {
        a[i] += min;
    }
}

function sortInternal(a, start, end, position) {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], offsets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, digit, s, e, from, to, tmp, num, offset;

    for (i = start; i < end; i++) {
        digit = getDigit(a[i], position);
        counts[digit]++;
    }

    offsets[0] = start;

    for (i = 1; i < NUM_BUCKETS; i++) {
        offsets[i] = offsets[i - 1] + counts[i - 1];
    }

    for (i = 0; i < NUM_BUCKETS; i++) {
        while (counts[i] > 0) {
            offset = offsets[i], num = a[offset];

            do {
                digit = getDigit(num, position);
                to = offsets[digit];
                tmp = a[to];

                counts[digit]--;
                offsets[digit]++;

                a[to] = num;
                num = tmp;
            } while (to !== offset);
        }
    }

    if (position > 1) {
        for (i = 0; i < NUM_BUCKETS; i++) {
            s = i === 0 ? start : offsets[i - 1];
            e = offsets[i];
            if (e - s > 1) {
                sortInternal(a, s, e, position - 1);
            }
        }
    }
}

function getDigit(num, position) {

    var divisor = Math.pow(NUM_BUCKETS, position - 1);

    return Math.floor(num / divisor) % NUM_BUCKETS;
}

module.exports = sort;
