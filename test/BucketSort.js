'use strict';

var util = require('./Util');

function sort(a) {
    var BUCKET_SIZE = 2;
    var buckets = [],
        min = a.sort(function (a, b) { return a - b; })[0],
        max = a.sort(function (a, b) { return b - a; })[0],
        len = a.length,
        targetBucket,
        offset,
        snapshot, b, i;

    for (i = 0; i < len; i++) {
        targetBucket = Math.floor((a[i] - min) / BUCKET_SIZE);

        if (typeof buckets[targetBucket] === 'undefined') {
            buckets[targetBucket] = [a[i]];
        } else {
            buckets[targetBucket].push(a[i]);
        }
    }

    offset = 0;
    for (i = 0; i < buckets.length; i++) {
        if (typeof buckets[i] === 'undefined') {
            continue;
        }

        snapshot = offset;
        for (b = 0; b < buckets[i].length; b++) {
            a[offset++] = buckets[i][b];
        }

        insertionSort(a, snapshot, offset);
    }
}

function insertionSort(a, start, end) {
    var i, len = end - start, index, insertMe;

    for (i = start + 1; i < end; i++) {
        insertMe = a[i];
        index = i - 1;
        while (index >= start && a[index] > insertMe) {
            a[index + 1] = a[index];
            index--;
        }
        a[index + 1] = insertMe;
    }
}

exports.sort = sort;
