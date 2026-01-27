const isPerfect = require('../perfectNumber');

describe('PerfectNumber', () => {
    it('should return true for perfect number 6', () => {
        expect(isPerfect(6)).toBe(true);
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
