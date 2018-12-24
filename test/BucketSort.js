'use strict';

var util = require('./Util');

function sort(a) {
    var BUCKET_SIZE = 5, targetBucket, i, len = a.length, buckets = [], b, bucket;

    var min = a.sort(function (x, y) { return x - y; })[0];
    a.sort(function (x, y) { return y - x; });

    for (i = 0; i < len; i++) {
        targetBucket = Math.floor((a[i] - min) / BUCKET_SIZE);
        if (typeof buckets[targetBucket] === 'undefined') {
            buckets[targetBucket] = [a[i]];
        } else {
            buckets[targetBucket].push(a[i]);
        }
    }
    var offset = 0, snapshot;
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
    var index, insertMe, i;

    for (i = start + 1; i < end; i++) {
        index = i - 1, insertMe = a[i];

        while (index >= start && a[index] > insertMe) {
            a[index + 1] = a[index];
            index--;
        }
        a[index + 1] = insertMe;
    }

}

exports.sort = sort;
