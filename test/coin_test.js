const Coin = require('../src/coin.js');
const assert = require('chai').assert;


describe("Coin", () => {
  describe("Coin is same", () => {

    it("Should return true when coordinates of other is same", () => {
      assert.isTrue(new Coin(0, 0).isSame(new Coin(0, 0)));
    });

    it("Should return true when one of the coordinates of other is different", () => {
      assert.isTrue(new Coin(0, 0).isNotSame(new Coin(0, 2)));
      assert.isTrue(new Coin(0, 0).isNotSame(new Coin(1, 2)));
      assert.isTrue(new Coin(0, 0).isNotSame(new Coin(2, 0)));
    });
  })

});