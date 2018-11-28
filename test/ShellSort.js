'use strict';
var util = require('./Util');

function ShellSort(a) {
    var gaps = [701, 301, 132, 57, 23, 10, 4, 1], gap, g, i, index, insertMe;

    for (g = 0; g < gaps.length; g++) {
        gap = gaps[g];

        for (i = gap; i < a.length; i++) {
            insertMe = a[i], index = i - gap;
            while (index >= 0 && a[index] > insertMe) {
                a[index + gap] = a[index];
                index -= gap;
            }
            a[index + gap] = insertMe;
        }
    }
}

module.exports = ShellSort;
