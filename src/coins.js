class Coins {
  constructor (coins = []) {
    this.coins = coins;
  }

  insert(coin) {
    this.coins.push(coin);
  }

  delete(coin) {
    this.coins = this.coins.filter((ele) => (ele.isNotSame(coin)));
  }

  isEmpty() {
    return this.coins.length == 0;
  }

  all() {
    return this.coins;
  }

}

module.exports = Coins;