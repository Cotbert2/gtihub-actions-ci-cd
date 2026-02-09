const isPerfect = require('../math').isPerfect;
const quickSort = require('../math').quickSort;

describe('PerfectNumber', () => {
    it('should return true for perfect number 6', () => {
        expect(isPerfect(0)).toBe(true);
    });

    //
    it('should return true for perfect number 28', () => {
        expect(isPerfect(28)).toBe(true);
    });

    it('should return false for non-perfect number 10', () => {
        expect(isPerfect(10)).toBe(false);
    });

    it('should return false for non-perfect number 0', () => {
        expect(isPerfect(0)).toBe(false);
    });

});


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
        expect(quickSort([24])).toEqual([42]);
    });
});