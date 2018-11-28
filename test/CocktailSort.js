'use strict';
var util = require('./Util');

function sort(a) {
  var left = 0, right = a.length - 1, i, swapped;

  while (left < right) {

    swapped = false;
    for (i = left; i + 1 <= right; i++) {
      if (a[i] > a[i + 1]) {
        util.swap(a, i, i + 1);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
    right--;

    swapped = false;
    for (i = right; i - 1 >= left; i--) {
      if (a[i] < a[i - 1]) {
        util.swap(a, i, i - 1);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
    left++;
  }
}

module.exports = sort;
