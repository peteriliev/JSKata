function sort(a) {

    var min = a.sort(function(a, b) {
        return a - b;
    })[0];

    var max = a.sort(function(a, b) {
        return b - a;
    })[0];

    var maxNormalized = max - min;
    var maxLen = Math.floor(Math.log10(maxNormalized)) + 1;

    // console.info('Max = ' + max + '; min = ' + min + '; maxLen = ' + maxLen);

    sortInternal(a, 0, a.length, maxLen, min);
}

function sortInternal(a, start, end, radix, min) {

    var num, counts, offsets, offset, significant, target, tmp, from, to;

    counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], offsets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = start; i < end; i++) {
        significant = getSignificant(a[i] - min, radix);
        counts[significant] += 1;
    }

    offsets[0] = start;
    for (var j = 1; j < 10; j++) {
        offsets[j] = counts[j - 1] + offsets[j - 1];
    }
    // console.info('\n\nRadix = ' + radix + '; start = ' + start + '; end = ' + end + ' counts =' + counts + '; offsets = ' + offsets);
    // console.info('a = ' + a);

    for (var b = 0; b < 10; b++) {

        while (counts[b] > 0) {
            offset = offsets[b];
            from = offset;
            num = a[offset];

            do {
                significant = getSignificant(num - min, radix);
                to = offsets[significant];
                tmp = a[to];
                // console.info('\nIN: num = ' + num + '; significant = ' + significant + '; from = ' + from + '; to = ' + to + '; tmp = ' + tmp + ';\n counts = ' + counts + '; offsets = ' + offsets);

                offsets[significant]++;
                counts[significant]--;

                a[to] = num;
                from = to;
                num = tmp;

                // console.info('OUT: num = ' + num + '; significant = ' + significant + '; from = ' + from + '; to = ' + to + '; tmp = ' + tmp + ';\n counts = ' + counts + '; offsets = ' + offsets);
            } while (from != offset);
        }
    }

    if (radix > 1) {
        radix -= 1;
        for (b = 0; b < 10; b++) {
            var s1 = b == 0 ? start : offsets[b - 1];
            var e1 = offsets[b];
            if (e1 - s1 > 1) {
                sortInternal(a, s1, e1, radix, min);
            }
        }
    }
}

function getSignificant(num, radix) {

    var divisor = Math.pow(10, radix - 1);

    return Math.floor(num / divisor) % 10;
}

module.exports = sort;
