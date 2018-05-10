'use strict';
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    const board = [];
    // for loop iterating through numberOfRows
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        // Create an empty row array
        const row = [];
        // for loop iterating through numberOfColumns
        for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            // Push the empty spaces onto the row array
            row.push(' ');
        }
        // Push the row onto the board array
        board.push(row);
    }
    // Return the board array
    return board;
};


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    // for loop iterating through numberOfRows
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        // Create an empty row array
        const row = [];
        // for loop iterating through numberOfColumns
        for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            // Push the empty spaces onto the row array
            row.push(null);
        }
        // Push the row onto the board array
        board.push(row);
    }
    // Return the board array
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        const randomRowIndex = Math.floor(Math.random() * numberOfRows);
        const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
        // Make bombs not be placed on top of each other
    }
    return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);