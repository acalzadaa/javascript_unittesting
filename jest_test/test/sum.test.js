const math = require('../sum')

test('add 1 + 2 to equal 3', () => {
    expect(math(1,2)).toBe(3);
});
