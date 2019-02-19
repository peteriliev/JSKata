'use strict';

function convert(decimal) {

    var map = [
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

    var tmp = decimal, i, len = map.length, result = '', key, val;

    for (i = 0; i < len; i++) {
        key = map[i][1], val = map[i][0];
        //console.info('Key = ' + key + '; val = ' + val);

        while (tmp >= key) {
            //console.info('Key = ' + key + '; tmp = ' + val);
            result += val;
            tmp -= key;
        }
    }

    return result;
}

module.exports = convert;
