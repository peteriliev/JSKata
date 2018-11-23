function ShellSort(a) {

    var gap, gaps = [701, 301, 132, 57, 23, 10, 4, 1],
        len = a.length,
        insertMe, index;


    for (var g = 0, glen = gaps.length; g < glen; g++) {
        gap = gaps[g];

        for (var i = gap; i < len; i++) {
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
