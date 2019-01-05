class Board {
  constructor (rows, cols) {
    this.lowBoundary = 0;
    this.rows = rows;
    this.cols = cols;
  }

  isWithinRange(xcoord, ycoord) {
    return xcoord >= lowBoundary && xcoord < cols &&
      ycoord >= lowBoundary && ycoord < rows;
  }

  isValidMove(move) {
    return isWithinRange(move[0], move[1])
  }

}

module.exports = Board;
