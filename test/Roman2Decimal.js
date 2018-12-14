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
    }, i, c, result = 0, current, previous = Number.MAX_SAFE_INTEGER;

    for (i = 0; i < roman.length; i++) {
        c = roman.charAt(i);
        current = map[c];
        result += current;
        if (previous < current) {
            result -= 2*previous;
        }
        previous = current;
    }

    return result;
}

module.exports = convert;
