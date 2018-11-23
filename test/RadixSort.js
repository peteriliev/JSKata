function sort(a) {

    var max = 9320932;
    var min = -55;

    var num = 0,
        significant = 0,
        buckets = [],
        bucket,
        offset = 0;

    var maxLen = Math.floor(Math.log10(max)) + 1;

    for (var r = 1; r <= maxLen; r++) {

        for (var i = 0, len = a.length; i < len; i++) {
            num = a[i];
            significant = getSignificant(num - min, r);

            if (typeof(buckets[significant]) === 'undefined') {
                buckets[significant] = [num];
            } else {
                buckets[significant].push(num);
            }
        }

        offset = 0;
        for (var b = 0; b < 10; b++) {
            bucket = buckets[b];

            if (!bucket) {
                continue;
            }

            for (var b2 = 0, b2len = bucket.length; b2 < b2len; b2++) {
                a[offset++] = bucket[b2];
            }
            buckets[b] = [];
        }
    }
}

function getSignificant(num, radix) {

    var divisor = Math.pow(10, radix - 1);

    return (Math.floor(num / divisor)) % 10;
}

module.exports = sort;
