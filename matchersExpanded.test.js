// other commonly used matchers

/**
 * String matchers: toMatch, etc
 * number matchers: toBeGreaterThan, toBeLessThan, toBeGreaterThanOrEqual, toBeLessThanOrEqual
 * Truthyness matchers: 
 */

test('there is pool in Liverpool', () => {
    expect('Liverpool').toMatch(/pool/)
})

