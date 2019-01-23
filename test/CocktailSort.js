'use strict';

var util = require('./Util');

function sort(a) {
    var i, start = 0, end = a.length, swapped;

    while (start < end - 1) {
        console.info('Start/end = ' + start + '/' + end);
        swapped = false;
        for (i = start; i + 1 < end; i++) {
            if (a[i] > a[i + 1]) {
                util.swap(a, i, i + 1);
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
        end--;

        swapped = false;
        for (i = end - 1; i - 1 >= start; i--) {
            if (a[i] < a[i - 1]) {
                util.swap(a, i, i - 1);
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
        start++;
    }
}

exports.sort = sort;
