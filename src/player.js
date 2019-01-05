class Player {
  constructor (coins) {
    this._coins = coins;
  }

  deleteCoin(coin) {
    this._coins.delete(coin);
  }

  insertCoin(coin) {
    this._coins.insert(coin);
  }

  didLose() {
    return this._coins.isEmpty();
  }

  coins() {
    return this._coins.all();
  }

}

module.exports = Player;