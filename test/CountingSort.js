'use strict';

function CountingSort(a) {
  var min = a.sort(function (a, b) { return a - b; })[0],
    max = a.sort(function (a, b) { return b - a; })[0],
    counts = [], count, i, j, offset, num;

  for (i = 0; i < a.length; i++) {
    num = a[i] - min;
    if (typeof counts[num] === 'undefined') {
      counts[num] = 1;
    } else {
      counts[num]++;
    }
  }

  offset = 0;
  for (i = 0; i < counts.length; i++) {
    if (typeof counts[i] === 'undefined') {
      continue;
    }
    count = counts[i];

    for (j = 0; j < count; j++) {
      a[offset++] = i + min;
    }
  }


}

module.exports = CountingSort;
