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
    var _char, current, result = 0, previous = Number.MAX_SAFE_INTEGER, current;

    for (var c = 0; c < roman.length; c++) {
        _char = roman.charAt(c);
        current = map[_char];
        result += current;

        if (current > previous) {
            result -= 2 * previous;
        }

        previous = current;
    }

    return result;
}

module.exports = convert;
