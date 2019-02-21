'use strict';

function sort(a) {
    var i, insertMe, index;

    for (i = 1; i < a.length; i++) {
        index = i - 1;
        insertMe = a[i];
        while (index >= 0 && a[index] > insertMe) {
            a[index + 1] = a[index];
            index--;
        }
        a[index + 1] = insertMe;
    }
}

exports.sort = sort;
