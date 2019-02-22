'use strict';

var util = require('./Util');

function sort(a) {
    var gaps = [1], gap, i, len = a.length, g, insertMe, index;

    for (g = 0; g < gaps.length; g++) {
        gap = gaps[g];

        for (i = gap; i < len; i++) {
            index = i - gap;
            insertMe = a[i];
            while (index >= 0 && a[index] > insertMe) {
                a[index + gap] = a[index];
                index -= gap;
            }
            a[index + gap] = insertMe;
        }
    }
}

exports.sort = sort;
