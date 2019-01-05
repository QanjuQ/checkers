const Board = require('./src/board.js');
const utils = require('./src/utils.js');
const Game = require('./src/game.js');
const Coin = require('./src/coin.js');
const Coins = require('./src/coins.js');
const Player = require('./src/player.js');
const possibleMoves = require('./src/moves.js');
const readline = require('readline-sync').question;

const player1 = [[0, 0], [0, 2], [0, 4], [0, 6], [0, 8],
[1, 1], [1, 3], [1, 5], [1, 7], [1, 9]];
const player2 = [[8, 0], [8, 2], [8, 4], [8, 6], [8, 8],
[9, 1], [9, 3], [9, 5], [9, 7], [9, 9]];

const createBoard = () => {
  return new Board(utils.emptyBoard());
};

const createCoins = (positions, symbol) => {
  return new Coins(positions.map(
    position => new Coin(position[0], position[1], symbol)
  ));
};

const gameSetup = () => {
  let game = new Game(createBoard());
  game.addPlayer(new Player(createCoins(player1, 'X')));
  game.addPlayer(new Player(createCoins(player2, 'O')));
  return game;
};

const play = (game) => {
  let coin = readline("Select coin to move:");
  makemove(coin, game);
}

const makemove = (coin, game) => {
  let move = readline("Select place to move:");
  let moves = possibleMoves([coin[0], coin[1]], game.board);
  console.log(moves);
  if (moves.includes(move)) {
    game.move(coin, move);
  } else {
    makemove(coin, game);
  }
  utils.drawBoard(game.state);
};

const main = () => {
  let game = gameSetup();
  do {
    utils.drawBoard(game.state());
    play(game);
  } while (!game.isOver());
};

main();