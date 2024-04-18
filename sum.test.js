// each unit test should be inside of a test block that starts with it or test
/**
 * the test block has a structure 
   it('description of what the test block does', () => {
    // a callback function that contains the tests, arrangements, actions and assertions.
    // i.e test logics
   })
 */

   const sum = require('./sum')

   test('test if 1 + 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3)
   })