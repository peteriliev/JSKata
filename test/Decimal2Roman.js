'use strict';

function convert(decimal) {

    var result = '', tmp = decimal, i, current;

    var map = [
        { key: 'M', val: 1000 },
        { key: 'CM', val: 900 },

        { key: 'D', val: 500 },
        { key: 'CD', val: 400 },

        { key: 'C', val: 100 },
        { key: 'XC', val: 90 },

        { key: 'L', val: 50 },
        { key: 'XL', val: 40 },

        { key: 'X', val: 10 },
        { key: 'IX', val: 9 },

        { key: 'V', val: 5 },
        { key: 'IV', val: 4 },

        { key: 'I', val: 1 }
    ];

    for (i = 0; i < map.length; i++) {
        current = map[i];
        while (tmp >= current.val) {
            result += current.key;
            tmp -= current.val;
        }
    }

    return result;
}

module.exports = convert;
