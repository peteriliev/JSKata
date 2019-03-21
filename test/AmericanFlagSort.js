'use strict';

var NUM_BUCKETS = 10;

function sort(a) {

    var i,
        len = a.length,
        min = a.sort(function (a, b) { return a - b; })[0],
        max = a.sort(function (a, b) { return b - a; })[0],
        maxLen = Math.floor(Math.log10(max)) + 1;

    for (i = 0; i < len; i++) {
        a[i] -= min;
    }

    sortInternal(a, 0, len, maxLen);

    for (i = 0; i < len; i++) {
        a[i] += min;
    }
}

function sortInternal(a, start, end, position) {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        offsets = [start, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        i, digit, b, num, tmp, from, to, s, e, offset;

    for (i = start; i < end; i++) {
        digit = getDigit(a[i], position);
        counts[digit]++;
    }

    for (i = 1; i < NUM_BUCKETS; i++) {
        offsets[i] = offsets[i - 1] + counts[i - 1];
    }

    for (b = 0; b < NUM_BUCKETS; b++) {

        while (counts[b] > 0) {
            offset = offsets[b];
            from = offset;
            num = a[from];

            do {

                digit = getDigit(num, position);
                to = offsets[digit];
                tmp = a[to];

                offsets[digit]++;
                counts[digit]--;

                from = to;
                a[to] = num;
                num = tmp;

            } while (from !== offset);
        }
    }

    if (position > 1) {
        for (b = 0; b < NUM_BUCKETS; b++) {
            s = b === 0 ? start : offsets[b - 1];
            e = offsets[b];
            if (e - s > 1) {
                sortInternal(a, s, e, position - 1);
            }
        }
    }
}

function getDigit(num, position) {
    var divisor = Math.pow(10, position - 1);

    return Math.floor(num / divisor) % 10;
}

module.exports = sort;
