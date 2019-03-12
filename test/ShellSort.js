'use strict';

var util = require('./Util');

function sort(a) {
    var gaps = [1], g, gap, i, len = a.length, insertMe, index;

    for (g = 0; g < gaps.length; g++) {
        gap = gaps[g];

        for (i = gap; i < len; i++) {
            insertMe = a[i];
            index = i - gap;

            while (index >= 0 && a[index] > insertMe) {
                a[index + gap] = a[index];
                index -= gap;
            }

            a[index + gap] = insertMe;
        }
    }
}

exports.sort = sort;
