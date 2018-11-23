function CountingSort(a) {

  var min = a.sort(function (a, b) { return a - b;})[0],
      max = a.sort(function (a, b) { return b - a;})[0],
      tmp = [];


  for (var i = 0, len = a.length; i < len; i++) {
    if (tmp[a[i] - min] === undefined) {
        tmp[a[i] - min] = 1;
    } else {
      tmp[a[i] - min]++;
    }
  }

  var aindex = 0;
  for (var j = 0, lenj = tmp.length; j < lenj; j++) {
    if (tmp[j] === undefined) {
      continue;
    }
    var elem = j + min, count = tmp[j];
    while (count-- > 0) {
      a[aindex++] = elem;
    }
  }
}

module.exports = CountingSort;
