const multiply = require('./product')

describe('testing the outcomes of positive scenarios', () => {
    test('test if 2 * 3 equals 6', () => {
        expect(multiply(2, 3)).toBE(6)
    })
})