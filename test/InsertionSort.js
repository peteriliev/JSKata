'use strict';

function sort(a) {

    var len = a.length,
        insertMe, index;

    for (var i = 1; i < len; i++) {
        insertMe = a[i];
        index = i - 1;
        while (index >= 0 && a[index] > insertMe) {
            a[index + 1] = a[index];
            index--;
        }

        a[index + 1] = insertMe;
    }
}

module.exports = sort;
