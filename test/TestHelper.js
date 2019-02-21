'use strict';

function getTestSets() {
    var result = [getEmptySet(), getSingleSet(), getSpecialSet()];

    for (var i = 0; i < 5; i++) {
        result.push(generateSet());
    }

    return result;
}

function getEmptySet() {
    return { 'sorted': [], 'unsorted': [] };
}

function getSpecialSet() {
    return { 'sorted': [0, 1, 2], 'unsorted': [2, 1, 0] };
}

function getSingleSet() {
    return { 'sorted': [1], 'unsorted': [1] };
}

function generateSet() {

    var len = 10 + Math.floor(Math.random() * 11),
        sorted = [], unsorted = [];

    for (var i = 0; i < len; i++) {
        var rnd = Math.floor(Math.random() * 1001);
        sorted[i] = rnd;
        unsorted[i] = rnd;
    }

    sorted.sort(function (a, b) { return a - b; });

    return { 'sorted': sorted, 'unsorted': unsorted };
}

function equalArrays(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }

    return true;
}

exports.getTestSets = getTestSets;
exports.equalArrays = equalArrays;
