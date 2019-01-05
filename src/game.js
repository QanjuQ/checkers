class Game {
  constructor (board) {
    this.players = [];
    this._board = board;
    this.currPlayerIndex = 0;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  board() {
    return this.board.state;
  }

  changeTurn() {
    this.currPlayerIndex = 1 - this.currPlayerIndex;
  }

  currPlayer() {
    return this.players[this.currPlayerIndex];
  }

  otherPlayer() {
    return this.players[1 - this.currPlayerIndex];
  }

  move(coin, to) {
    this.currPlayer().moveCoin(coin, to);
    this.board.moveCoin(coin, to);
    this.changeTurn();
  }

  captureOpponentsCoin(coin) {
    this.otherPlayer().deleteCoin(coin);
    this.board.deleteCoin(coin);
  }

  isOver() {
    this.otherPlayer().didLose();
  }

  state() {
    const players = this.players;
    const moves = [].concat(players[0].coins()).concat(players[1].coins());
    return moves;
  }

}

module.exports = Game;