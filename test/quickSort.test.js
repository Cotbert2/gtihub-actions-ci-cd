const quickSort = require('../quickSort.js');

describe('quickSort function', () => {
    test('sorts an array of positive numbers', () => {
        expect(quickSort([3, 6, 8, 10, 1, 2, 1])).toEqual([1, 1, 2, 3, 6, 8, 10]);
    });

    test('sorts an array with negative numbers', () => {
        expect(quickSort([-3, -1, -7, -4])).toEqual([-7, -4, -3, -1]);
    });

    test('sorts an array with mixed positive and negative numbers', () => {
        expect(quickSort([3, -2, -5, 1, 0])).toEqual([-5, -2, 0, 1, 3]);
    });

    test('returns an empty array when given an empty array', () => {
        expect(quickSort([])).toEqual([]);
    });

    test('returns the same single-element array', () => {
        expect(quickSort([42])).toEqual([42]);
    });
});