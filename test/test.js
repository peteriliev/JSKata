var assert = require('assert');
var helper = require('./TestHelper');

describe('Array', function () {

    describe('bubbleSort', function () {

        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                require('./BubbleSort')(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('insertionSort', function () {
        it('Array should be sorted', function () {
            var unsorted = [20, 18, 19, 40, -13, 5, 4, 3, 19, 34, 9320932, -5];
            console.log(unsorted);

            const insertionSort = require('./InsertionSort');
            insertionSort(unsorted);
            console.log(unsorted);
        });
    });

    describe('selectionSort', function () {
        it('Array should be sorted', function () {
            var unsorted = [20, 18, 0, 19, 40, -13, 5, 4, 3, 19, 34, 0, 9320932, -55, 832, 17, 0];
            console.log(unsorted);

            const selectionSort = require('./SelectionSort');
            selectionSort(unsorted);
            console.log(unsorted);
        });
    });

    describe('cocktailSort', function () {
        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                const cocktailSort = require('./CocktailSort');

                cocktailSort(set.unsorted);

                console.log("\nSorted: " + set.unsorted);

                console.log("--------------------------------------------------------------------------------------------");

                assert(helper.equalArrays(set.unsorted, set.sorted));
            }
        });
    });

    describe('mergeSort', function () {
        it('Array should be sorted', function () {
            var unsorted = [20, 18, 0, 19, 40, -13, 5, 4, 3, 19, 34, 0, 9320932, -55, 832, 17, 0, 44, 33];
            console.log(unsorted);

            const mergeSort = require('./MergeSort');
            mergeSort(unsorted);
            console.log(unsorted);
        });
    });

    describe('quickSort', function () {
        it('Array should be sorted', function () {
            var unsorted = [20, 18, 0, 19, 40, -13, 5, 4, 3, 19, 34, 0, 9320932, -55, 832, 17, 0, 44, 33];
            //var unsorted = [3, 0, -1, -2];
            console.log(unsorted);

            const quickSort = require('./QuickSort');
            quickSort(unsorted);
            console.log(unsorted);
        });
    });

    describe('combSort', function () {
        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                const combSort = require('./CombSort');

                combSort(set.unsorted);

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

                shellSort(set.unsorted);

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
            var unsorted = [20, 18, 0, 19, 40, -13, 5, 4, 3, 19, 34, 0, 9320932, -55, 832, 17, 0, 44, 33];
            //var unsorted = [5, 5, 4, 3, 1, 2, 1];
            console.log(unsorted);

            const bucketSort = require('./BucketSort');
            bucketSort(unsorted);
            console.log(unsorted);
        });
    });

    describe('radixSort', function () {

        it('Array should be sorted', function () {

            var sets = helper.getTestSets(), set;

            for (var i = 0; i < sets.length; i++) {

                set = sets[i];

                console.log("Unsorted: " + set.unsorted);

                const radixSort = require('./RadixSort');

                radixSort(set.unsorted);

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
            var unsorted = [20, 18, 0, 19, -55, 0, 9320932, 55, 33, -40, 414, 413, 412, 400];
            console.log(unsorted);

            const stoogeSort = require('./StoogeSort');
            stoogeSort(unsorted);
            console.log(unsorted);
        });
    });

    describe('roman2Decimal', function () {

        it('Array should be sorted', function () {
            var romans = ['I', 'II', 'III', 'IV', 'V', 'IX', 'X', 'XI', 'XX', 'XXX', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M', 'MCMLIV', 'MCMXC', 'MMVIII'],
                decimals = [1, 2, 3, 4, 5, 9, 10, 11, 20, 30, 40, 50, 90, 100, 400, 500, 900, 1000, 1954, 1990, 2008],
                len = romans.length, i;

            const roman2Decimal = require('./roman2Decimal');

            for (i = 0; i < len; i++) {
                console.info('Roman = ' + romans[i] + ', decimal = ' + decimals[i]);
                assert(roman2Decimal(romans[i]) === decimals[i]);
            }
        });
    });

    describe('decimal2Roman', function () {
        it('Array should be sorted', function () {
            var decimals = [0, 1954, 1990, 2008],
                romans = ['', 'MCMLIV', 'MCMXC', 'MMVIII'],
                len = decimals.length, i;

            const decimal2Roman = require('./Decimal2Roman');

            for (var i = 0, len = decimals.length; i < len; i++) {
                console.info('Decimal = ' + decimals[i] + ', roman = ' + romans[i]);
                assert(decimal2Roman(decimals[i]) === romans[i]);
            }
        });
    });
});
