'use strcit';

function convert(roman) {

    var map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

    var i, len = roman.length, c, previous = Number.MAX_SAFE_INTEGER, val, result = 0;

    for (i = 0; i < len; i++) {

        c = roman.charAt(i);
        val = map[c];
        result += val;

        if (val > previous) {
            result -= 2 * previous;
        }

        previous = val;
    }

    return result;
}

module.exports = convert;
