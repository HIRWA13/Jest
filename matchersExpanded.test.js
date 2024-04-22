// other commonly used matchers

/**
 * String matchers: toMatch, etc
 * number matchers: toBeGreaterThan, toBeLessThan, toBeGreaterThanOrEqual, toBeLessThanOrEqual
 * Truthyness matchers: test whether something true or truthry, null, defined, undefined, false
 * Array and toContain matcher: toContain matcher
 */

test('there is pool in Liverpool', () => {
    expect('Liverpool').toMatch(/pool/)
})

const multiply = require('./product')

describe('test using numberMatchers', ()=> {
    test('number matchers', () => {
        expect(multiply(2, 3)).toBe(6)
        expect(multiply(2, 3)).toBeGreaterThan(5)
        expect(multiply(2, 3)).toBeLessThan(7)
        expect(multiply(2, 3)).toBeGreaterThanOrEqual(6)
        expect(multiply(2, 3)).toBeLessThanOrEqual(6)
    })
})

test('test truthyness matchers', () => {
    const n = null;
    
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

const carStock = [
    'BMW',
    'Ferarii',
    'Toyota',
]

test('test if Toyota is in carStock', () => {
    expect(carStock).toContain('Toyota')
})