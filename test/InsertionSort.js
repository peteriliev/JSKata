'use strict';

function sort(a) {
    var index, insertMe, i, len;
    len = a.length;

    for (i = 1; i < len; i++) {
        insertMe = a[i];
        index = i - 1;
        while (index >= 0 && a[index] > insertMe) {
            a[index + 1] = a[index];
            index--;
        }
        a[index + 1] = insertMe;
    }
}

exports.sort = sort;
