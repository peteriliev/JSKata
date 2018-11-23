function convert(roman) {

  var result = 0, _char = '', current = -1, previous = Number.MAX_VALUE;

  var map = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000};

    for (var i = 0, len = roman.length; i < len; i++) {
      _char = roman.slice(i, i + 1);

      current = map[_char];

      result += current;

      if (current > previous) {
        result -= (2 * previous);
      }
      previous = current;
    }

    return result;
}

module.exports = convert;
