function CombSort(a) {
    var len = a.length,
        gap = len,
        swapped = false,
        i,
        tmp;

    while (gap > 1 || swapped) {
        gap = Math.floor(gap / 1.3);
        if (gap < 1) {
            gap = 1;
        }
        swapped = false;
        for (i = 0; i + gap < len; i++) {
            if (a[i] > a[i + gap]) {
                tmp = a[i];
                a[i] = a[i + gap];
                a[i + gap] = tmp;
                swapped = true;
            }
        }
    }
}

module.exports = CombSort;
