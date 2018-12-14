'use strict';

var util = require('./Util');

function sort(a) {
    var BUCKET_SIZE = 5,
        min = a.sort(function (x, y) { return x - y; })[0],
        buckets = [],
        i, b, offset, len = a.length, targetBucket, snapshot;

    a.sort(function (x, y) { return y - x; });


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

    var index, insertMe, i;

    for (i = start + 1; i < end; i++) {
        insertMe = a[i], index = i - 1;
        while (index >= 0 && a[index] > insertMe) {
            a[index + 1] = a[index];
            index--;
        }

        a[index + 1] = insertMe;
    }

}

exports.sort = sort;
