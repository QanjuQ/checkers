const Coins = require("../src/coins.js");
const Coin = require("../src/coin.js");
const assert = require('chai').assert;


describe("Coins", () => {

  const mockCoin = { isNotSame: () => (true) };
  describe("insert", () => {
    it("Should insert element given to list.", () => {
      let expected = new Coins();
      expected.insert(new Coin(0, 0));

      assert.deepInclude(expected.coins, new Coin(0, 0));
    });
  });

  describe("delete", () => {
    it("Should delete element from given list.", () => {
      let expected = new Coins();
      expected.insert(new Coin(0, 0));
      expected.insert(new Coin(1, 2));
      expected.insert(new Coin(1, 4));

      expected.delete(new Coin(1, 4));

      assert.notDeepInclude(expected.coins, new Coin(1, 4));
    });

    describe("isEmpty()", () => {
      it("Should return true when no coins present.", () => {
        let expected = new Coins();
        assert.isTrue(expected.isEmpty());
      });
      it("Should return false with one or more coins present.", () => {
        let expected = new Coins();
        expected.insert(new Coin(0, 0));
        expected.insert(new Coin(0, 0));
        assert.isFalse(expected.isEmpty());
      });
    });

  });



});