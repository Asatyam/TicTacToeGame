/* eslint-disable wrap-iife */
/* eslint-disable no-plusplus */

const gameBoard = (() => {
  const main = document.querySelector('.main');
  function displayHeading() {
    const headingDiv = document.createElement('div');
    const headingPara = document.createElement('p');
    headingDiv.setAttribute('class', 'heading');
    headingPara.textContent = 'Tic-Tac-Toe';
    headingDiv.appendChild(headingPara);
    main.appendChild(headingDiv);
  }
  function displayResult() {
    const resultDiv = document.createElement('div');
    resultDiv.setAttribute('class', 'result');
    const resultPara = document.createElement('p');
    resultPara.textContent = 'Player X turn';
    resultDiv.appendChild(resultPara);
    main.appendChild(resultDiv);
  }
  function displayContent() {
    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'content');
    main.appendChild(contentDiv);
  }
  function displayBoard() {
    const content = document.querySelector('.content');
    const boardDiv = document.createElement('div');
    for (let i = 0; i < 9; i++) {
      const cellBtn = document.createElement('button');
      cellBtn.setAttribute('class', `cell${i}`);
      boardDiv.appendChild(cellBtn);
    }
    boardDiv.setAttribute('class', 'board');
    content.appendChild(boardDiv);
  }

  return {
    displayHeading,
    displayContent,
    displayBoard,
    displayResult,
  };
})();

const Game = (() => {
  const createLayout = () => {
    gameBoard.displayHeading();
    gameBoard.displayResult();
    gameBoard.displayContent();
    gameBoard.displayBoard();
  };

  return {
    createLayout,
  };
})();
Game.createLayout();
