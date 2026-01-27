const sum = require('../sum');
describe('sum function', () => {
    test('adds two positive numbers', () => {
        expect(sum(2, 3)).toBe(5);
    });
    test('adds a positive and a negative number', () => {
        expect(sum(5, -2)).toBe(3);
    }
    );
    test('adds two negative numbers', () => {
        expect(sum(-4, -6)).toBe(-10);
    });
    test('adds zero', () => {
        expect(sum(0, 5)).toBe(5);
        expect(sum(5, 0)).toBe(5);
    });
});