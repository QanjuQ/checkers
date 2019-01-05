class Coin {
  constructor (xcoord, ycoord, symbol = ' ') {
    this.xcoord = xcoord;
    this.ycoord = ycoord;
    this.symbol = symbol;
  }

  isSame(other) {
    return this.xcoord == other.xcoord &&
      this.ycoord == other.ycoord;
  }

  isNotSame(other) {
    return !this.isSame(other);
  }

}

module.exports = Coin;
