const multiply = require('./product')

describe('testing the outcomes of positive scenarios', () => {
    test('test if 2 * 3 equals 6', () => {
        expect(multiply(2, 3)).toBe(6)
    })
})
// jest matchers
test('test example', ()=> {
    const data = {first: 1}
    data['second'] = 2
    expect(data).toEqual({first: 1, second: 2})
})

test('test if 4 * 3 is not equal to 11', () => {
    expect(multiply(4, 3)).not.toBe(11)
})
