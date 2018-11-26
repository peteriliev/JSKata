var assert = require('assert');
var helper = require('./TestHelper');

describe('Array', function () {

    describe('bubbleSort1', function () {

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
            var unsorted = [20, 18, 0, 19, 40, -13, 5, 4, 3, 19, 34, 0, 9320932, -55, 832, 17, 0, 44, 33];
            console.log(unsorted);

            const cocktailSort = require('./CocktailSort');
            cocktailSort(unsorted);
            console.log(unsorted);
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
            var unsorted = [20, 18, 0, 19, 40, -13, 5, 4, 3, 19, 34, 0, 9320932, -55, 832, 17, 0, 44, 33];
            console.log(unsorted);

            const combSort = require('./CombSort');
            combSort(unsorted);
            console.log(unsorted);
        });
    });

    describe('shellSort', function () {
        it('Array should be sorted', function () {
            var unsorted = [20, 18, 0, 19, 40, -13, 5, 4, 3, 19, 34, 0, 9320932, -55, 832, 17, 0, 44, 33];
            console.log(unsorted);

            const shellSort = require('./ShellSort');
            shellSort(unsorted);
            console.log(unsorted);
        });
    });

    describe('countingSort', function () {
        it('Array should be sorted', function () {
            var unsorted = [20, 18, 0, 19, 40, -13, 5, 4, 3, 19, 34, 0, 9320932, -55, 832, 17, 0, 44, 33];
            console.log(unsorted);

            const countingSort = require('./CountingSort');
            countingSort(unsorted);
            console.log(unsorted);
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
            var unsorted = [20, 18, 0, 19, 40, -13, 5, 4, 3, 19, 34, 0, 9320932, -55, 832, 17, 0, 44, 33];
            // var unsorted = [2, 11, 1, 12];
            console.log(unsorted);

            const radixSort = require('./RadixSort');
            radixSort(unsorted);
            console.log(unsorted);
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

    /*
    	describe('roman2Decimal', function() {
    		it('Array should be sorted', function() {
    			var romans = ['I', 'II', 'III', 'IV', 'V', 'IX', 'X', 'XI', 'XX', 'XXX', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M', 'MCMLIV', 'MCMXC', 'MMVIII'],
    				decimals = [];
    			console.log(romans);

    			const roman2Decimal = require('./roman2Decimal');
    			for (var i = 0, len = romans.length; i < len; i++) {
    				decimals.push(roman2Decimal(romans[i]));
    			}

    			console.log(decimals);
    		});
    	});
    */

    /*
    	describe('decimal2Roman', function() {
    		it('Array should be sorted', function() {
    			var decimals = [0, 1954, 1990, 2008],
    				romans = [];
    			console.log(decimals);

    			const decimal2Roman = require('./Decimal2Roman');
    			for (var i = 0, len = decimals.length; i < len; i++) {
    				romans.push(decimal2Roman(decimals[i]));
    			}

    			console.log(romans);
    		});
    	});
    */

});
