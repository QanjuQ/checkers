const emptyBoard = (cols = 10) => {
  let state = {};
  for (index = 0; index < cols; index++) {
    state[index] = createFilledArray(cols, ' ');
  }
  return state;
}

const Table = require('cli-table');
const createFilledArray = (size, symbol) => {
  return new Array(size).fill(symbol);
};

const drawBoard = (state, cols = 10) => {
  const table = new Table({
    head: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    colWidths: createFilledArray(cols, 4)
  });

  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(
    (row) => {
      let array = createFilledArray(10, ' ');
      array.push(row);
      table.push(array);
    });

  state.forEach((position) => {
    table[position.xcoord][position.ycoord] = position.symbol;
  });
  console.log(table.toString());
};

module.exports = { drawBoard, emptyBoard };