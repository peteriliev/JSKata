'use strict';

var util = require('./Util');

function sort(a) {
    var min = a.sort(function (a, b) { return a - b; })[0];
    var max = a.sort(function (a, b) { return b - a; })[0];
    var buckets = [], bucket = [], i, len = a.length, targetBucket, BUCKET_SIZE = 3, b, offset, snapshot;

    for (i = 0; i < len; i++) {
        targetBucket = Math.floor((a[i] - min) / BUCKET_SIZE);

        if (typeof buckets[targetBucket] === 'undefined') {
            buckets[targetBucket] = [a[i]];
        } else {
            buckets[targetBucket].push(a[i]);
        }
    }

    offset = 0;
    for (b = 0; b < buckets.length; b++) {
        bucket = buckets[b];
        if (typeof bucket === 'undefined') {
            continue;
        }
        snapshot = offset;
        for (i = 0; i < bucket.length; i++) {
            a[offset++] = bucket[i];
        }

        insertionSort(a, snapshot, offset);
    }

}

function insertionSort(a, start, end) {
    var i, index, insertMe;

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
