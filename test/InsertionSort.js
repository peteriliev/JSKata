'use strict';

function sort(a) {
    var i, index, insertMe;

    for (i = 1; i < a.length; i++) {
        insertMe = a[i], index = i - 1;
        while (index >= 0 && a[index] > insertMe) {
            a[index + 1] = a[index];
            index--;
        }
        a[index + 1] = insertMe;
    }
}

exports.sort = sort;
