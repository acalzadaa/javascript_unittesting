var assert = require('assert');
var math = require('../math');

describe('Math', function () {
  describe('#Test1()', function () {
    it('Testing mult function', function () {
      assert.equal(math.mult(3,3), 9);
    });
  });

  describe('#Test2()', function () {
    it('Testing sum', function () {
      assert.equal(math.sum(3,4), 7);
    });
  });
});
