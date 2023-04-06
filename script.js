/* eslint-disable no-console */
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
  function displayResult(marker, winner) {
    const turnPara = document.querySelector('.result>p');
    if (turnPara) {
      if (!marker) {
        turnPara.textContent = 'The game ends in a draw';
        document.querySelector('.result').classList.add('draw');
      } else if (winner) {
        turnPara.textContent = `Player ${marker} is the winner`;
        document.querySelector('.result').classList.add('winner');
      } else {
        document.querySelector('.result').classList.remove('winner', 'draw');
        turnPara.textContent = `Player ${marker}'s Turn`;
      }
      return;
    }
    const resultDiv = document.createElement('div');
    resultDiv.setAttribute('class', 'result');
    const resultPara = document.createElement('p');
    resultPara.textContent = "Player X's turn";
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
  function displayRestartButton() {
    const content = document.querySelector('.content');
    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('class', 'restart');
    restartBtn.textContent = 'Restart Game';
    content.appendChild(restartBtn);
  }
  return {
    displayHeading,
    displayContent,
    displayBoard,
    displayResult,
    displayRestartButton,
  };
})();

const Game = (() => {
  let count;
  const board = [];
  let winner;
  let isDraw;

  const createLayout = () => {
    gameBoard.displayHeading();
    gameBoard.displayResult();
    gameBoard.displayContent();
    gameBoard.displayBoard();
  };
  const initialiseBoard = () => {
    count = 0;
    winner = '';
    isDraw = '';
    for (let i = 0; i < 9; i++) {
      board[i] = undefined;
    }
  };
  const decidePlayerTurn = () => (count % 2 === 0 ? 'player1' : 'player2');

  const checkWin = (marker) => {
    if (board[0] === marker && board[1] === marker && board[2] === marker) {
      return true;
    }
    if (board[3] === marker && board[4] === marker && board[5] === marker) {
      return true;
    }
    if (board[6] === marker && board[7] === marker && board[8] === marker) {
      return true;
    }
    if (board[0] === marker && board[3] === marker && board[6] === marker) {
      return true;
    }
    if (board[1] === marker && board[4] === marker && board[7] === marker) {
      return true;
    }
    if (board[2] === marker && board[5] === marker && board[8] === marker) {
      return true;
    }
    if (board[0] === marker && board[4] === marker && board[8] === marker) {
      return true;
    }
    if (board[2] === marker && board[4] === marker && board[6] === marker) {
      return true;
    }
    return false;
  };
  const checkDraw = () => {
    isDraw = board.includes(undefined);
    if (isDraw) {
      return false;
    }
    return true;
  };

  const userMove = (e) => {
    if (winner || isDraw) return;
    const btnPos = e.target.className.split('').reverse()[0];
    const playerTurn = decidePlayerTurn();
    if (playerTurn === 'player1') {
      board[btnPos] = 'X';
    } else {
      board[btnPos] = 'O';
    }
    e.target.textContent = board[btnPos];
    if (count % 2 === 0) {
      winner = checkWin('X');
      if (winner) {
        gameBoard.displayResult('X', 1, 0);
      }
    } else {
      winner = checkWin('O');
      if (winner) {
        gameBoard.displayResult('O', 1, 0);
      }
    }

    count++;
    if (!winner) {
      isDraw = checkDraw();
      if (isDraw) {
        gameBoard.displayResult('', 0, 1);
      }
    }
    if (!winner && !isDraw) {
      const marker = count % 2 === 0 ? 'X' : 'O';
      gameBoard.displayResult(marker, 0);
    }
  };
  const addEventListeners = () => {
    const cells = document.querySelectorAll('.board>button');
    cells.forEach((btn) => {
      btn.addEventListener('click', userMove, { once: true });
    });
  };

  const startGame = () => {
    initialiseBoard();

    addEventListeners();
  };
  const resetGame = () => {
    initialiseBoard();
    const cells = document.querySelectorAll('.board>button');
    cells.forEach((btn) => {
      // eslint-disable-next-line no-param-reassign
      btn.textContent = '';
      btn.removeEventListener('click', userMove);
    });
    gameBoard.displayResult('X', 0);
    addEventListeners();
  };
  const restartGame = () => {
    gameBoard.displayRestartButton();
    const restartBtn = document.querySelector('.restart');
    restartBtn.addEventListener('click', resetGame);
  };
  return {
    createLayout,
    startGame,
    restartGame,
  };
})();
Game.createLayout();
Game.startGame();
Game.restartGame();
