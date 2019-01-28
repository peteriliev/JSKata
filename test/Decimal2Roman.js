'use strict';

function convert(decimal) {

    var result = '', tmp = decimal, i, key, val;

    var map = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'CL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    for (i = 0; i < map.length; i++) {
        key = map[i][0], val = map[i][1];

        while (tmp >= key) {
            result += val;
            tmp -= key;
        }
    }

    return result;
}

module.exports = convert;
