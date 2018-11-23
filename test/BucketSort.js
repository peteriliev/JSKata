'use strict';
var swap = require('./Util');

function BucketSort(a) {
    var BUCKET_SIZE = 2,
        i, b, len = a.length,
        blen, offset, snapshot,
        bucket, buckets = [],
        targetBucket;

    var min = a.sort(function(a, b) {
        return a - b;
    })[0];

    a.sort(function(a, b) {
        return b - a;
    });

    for (i = 0; i < len; i++) {
        targetBucket = Math.floor((a[i] - min) / BUCKET_SIZE);
        if (typeof buckets[targetBucket] === 'undefined') {
            buckets[targetBucket] = [a[i]];
        } else {
            buckets[targetBucket].push(a[i]);
        }
    }

    blen = buckets.length;
    offset = 0;
    for (b = 0; b < blen; b++) {
        if (typeof buckets[b] === 'undefined') {
            continue;
        }
        bucket = buckets[b];
        snapshot = offset;
        for (i = 0; i < bucket.length; i++) {
            a[offset++] = bucket[i];
        }
        InsertionSortInternal(a, snapshot, offset);
    }
    console.info('test');
}

function InsertionSortInternal(a, start, end) {
    var i, index, insertMe;
    for (i = start + 1; i < end; i++) {
        insertMe = a[i], index = i - 1;
        while (index >= start && a[index] > insertMe) {
            a[index + 1] = a[index];
            index--;
        }
        a[index + 1] = insertMe;
    }
}

module.exports = BucketSort;
