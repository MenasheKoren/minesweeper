'use strict';
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  // for loop iterating through numberOfRows
  for (let index = 0; index < numberOfRows; index++) {
    // Create an empty row array
    let row = [];
    // for loop iterating through numberOfColumns
    for (let index = 0; index < numberOfColumns; index++) {
      // Push the empty spaces onto the row array  
      row.push(' ');
    }
    // Push the row onto the board array
    board.push(row);
  }
  // Return the board array
  return board;
};
generatePlayerBoard();

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  // for loop iterating through numberOfRows
  for (let index = 0; index < numberOfRows; index++) {
    // Create an empty row array
    let row = [];
    // for loop iterating through numberOfColumns
    for (let index = 0; index < numberOfColumns; index++) {
      // Push the empty spaces onto the row array  
      row.push(null);
    }
    
    let numberOfBombsPlaced = 0;
      while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random()) * numberOfRows;
        let randomColumnIndex = Math.floor(Math.random()) * numberOfColumns;
        board[randomRowIndex][randomColumnIndex] = 'B'
      }
    
    
    // Push the row onto the board array
    board.push(row);
  }
  // Return the board array
  return board;
};