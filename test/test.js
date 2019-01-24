var assert = require('assert');
var helper = require('./TestHelper');

describe('Array', function () {

    describe('bubbleSort', function () {

        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                require('./BubbleSort').sort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('insertionSort', function () {
        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                require('./InsertionSort').sort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('selectionSort', function () {
        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                require('./SelectionSort').sort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('cocktailSort', function () {
        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                const cocktailSort = require('./CocktailSort');

                cocktailSort.sort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('mergeSort', function () {

        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                require('./MergeSort').sort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('quickSort', function () {
        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                require('./QuickSort').sort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('combSort', function () {
        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                const combSort = require('./CombSort');

                combSort.sort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('shellSort', function () {
        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                const shellSort = require('./ShellSort');

                shellSort.sort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('countingSort', function () {
        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;
            //sets = [{ sorted: [0, 90, 91, 100], unsorted: [100, 0, 91, 90] }];

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                const countingSort = require('./CountingSort');

                countingSort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('bucketSort', function () {
        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                const bucketSort = require('./BucketSort');

                bucketSort.sort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('radixSort', function () {

        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                const radixSort = require('./RadixSort');

                radixSort.sort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('americanFlagSort', function () {

        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;
            //sets = [{ sorted: [0, 90, 91, 100], unsorted: [100, 0, 91, 90] }];

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                const americanFlagSort = require('./AmericanFlagSort');

                americanFlagSort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('stoogeSort', function () {

        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                const stoogeSort = require('./StoogeSort');

                stoogeSort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('roman2Decimal', function () {

        it('Romans converted', function () {
            var romans = ['I', 'II', 'III', 'IV', 'V', 'IX', 'X', 'XI', 'XX', 'XXX', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M', 'MCMLIV', 'MCMXC', 'MMVIII'],
                decimals = [1, 2, 3, 4, 5, 9, 10, 11, 20, 30, 40, 50, 90, 100, 400, 500, 900, 1000, 1954, 1990, 2008],
                len = romans.length, i;

            const roman2Decimal = require('./roman2Decimal');

            for (i = 0; i < len; i++) {
                assert(roman2Decimal(romans[i]) === decimals[i]);
                console.info('Roman = ' + romans[i] + ', decimal = ' + decimals[i]);
            }
        });
    });

    describe('decimal2Roman', function () {
        it('Decimals converted', function () {
            var decimals = [0, 1954, 1990, 2008],
                romans = ['', 'MCMLIV', 'MCMXC', 'MMVIII'],
                len = decimals.length, i;

            const decimal2Roman = require('./Decimal2Roman');

            for (var i = 0, len = decimals.length; i < len; i++) {
                assert(decimal2Roman(decimals[i]) === romans[i]);
                console.info('Decimal = ' + decimals[i] + ', roman = ' + romans[i]);
            }
        });
    });
});
