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

    var result = 0, c, num, prev = Number.MAX_SAFE_INTEGER;

    for (var i = 0; i < roman.length; i++) {
        c = roman.charAt(i);
        num = map[c];
        result += num;
        if (prev < num) {
            result -= (2 * prev);
        }
        prev = num;
    }

    return result;
}

module.exports = convert;
