'use strcit';

function convert(roman) {

    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var i = 0, len = roman.length, tmp = 0, r, val, prev = Number.MAX_SAFE_INTEGER;

    for (i = 0; i < len; i++) {
        r = roman.charAt(i);
        val = map[r];
        tmp += val;
        if (val > prev) {
            tmp -= 2 * prev;
        }
        prev = val;
    }

    return tmp;

}

module.exports = convert;
