'use strict';

function convert(decimal) {
    var result = '', tmp = decimal, i, element,
        map = [
            ['M', 1000],
            ['CM', 900],
            ['D', 500],
            ['CD', 400],
            ['C', 100],
            ['XC', 90],
            ['L', 50],
            ['XL', 40],
            ['X', 10],
            ['IX', 9],
            ['V', 5],
            ['IV', 4],
            ['I', 1]
        ];

    for (i = 0; i < map.length; i++) {
        element = map[i];
        while (tmp >= element[1]) {
            result += element[0];
            tmp -= element[1];
        }
    }

    return result;
}

module.exports = convert;
