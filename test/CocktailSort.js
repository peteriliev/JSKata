
function sort(a) {
    let left = 0, right = a.length, swapped = false, tmp = 0;

    while (left < right - 1) {
      swapped = false;
      for (var i = left; i + 1 < right; i++) {
          if (a[i] > a[i + 1]) {
            tmp = a[i];
            a[i] = a[i + 1];
            a[i + 1] = tmp;
            swapped = true;
          }
      }

      if (!swapped) {
        break;
      }
      right--;

      swapped = false;
      for (var j = right - 1; j >= left; j--) {
        if (a[j] < a[j -1]) {
          tmp = a[j];
          a[j] = a[j - 1];
          a[j - 1] = tmp;
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
