const moves = (move) => {
  let moves = [];
  moves.push([move[0] + 1, move[1] + 1]);
  moves.push([move[0] + 1, move[1] - 1]);
  return moves;
};

const isWithinRange = (move) => {
  return move[0] > 0 && move[1] < 10;
};

const possibleMoves = (moves, board) => {
  return moves.filter(board.isWithinRange);
};

module.exports = possibleMoves;
