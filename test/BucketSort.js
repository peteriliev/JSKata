'use strict';

var util = require('./Util');

function sort(a) {

    var b, len = a.length, buckets = [], BUCKET_SIZE = 4, i,
        min = a.sort(function (a, b) { return a - b; })[0],
        max = a.sort(function (a, b) { return b - a; })[0],
        targetBucket, offset, snapshot;

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
    var index, i, inserMe;

    for (i = start + 1; i < end; i++) {
        inserMe = a[i];
        index = i - 1;
        while (index >= start && a[index] > inserMe) {
            a[index + 1] = a[index];
            index--;
        }

        a[index + 1] = inserMe;
    }
}

exports.sort = sort;
