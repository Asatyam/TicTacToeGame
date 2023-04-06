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
  let count;
  const board = [];

  const createLayout = () => {
    gameBoard.displayHeading();
    gameBoard.displayResult();
    gameBoard.displayContent();
    gameBoard.displayBoard();
  };
  const initialiseBoard = () => {
    count = 0;
    for (let i = 0; i < 9; i++) {
      board[i] = undefined;
    }
  };
  const decidePlayerTurn = () => (count % 2 === 0 ? 'player1' : 'player2');

  const userMove = (e) => {
    const btnPos = e.target.className.split('').reverse()[0];
    const playerTurn = decidePlayerTurn();
    if (playerTurn === 'player1') {
      board[btnPos] = 'X';
    } else {
      board[btnPos] = 'O';
    }
    e.target.textContent = board[btnPos];
    count++;
  };
  const addEventListeners = () => {
    const cells = document.querySelectorAll('.board>button');
    cells.forEach((btn) => {
      btn.addEventListener('click', userMove);
    });
  };

  const startGame = () => {
    initialiseBoard();
    addEventListeners();
  };
  return {
    createLayout,
    startGame,
  };
})();
Game.createLayout();
Game.startGame();
