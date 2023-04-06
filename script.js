/* eslint-disable no-plusplus */
const main = document.querySelector('.main');
function createHeading() {
  const headingDiv = document.createElement('div');
  const headingPara = document.createElement('p');
  headingDiv.setAttribute('class', 'heading');
  headingPara.textContent = 'Tic-Tac-Toe';
  headingDiv.appendChild(headingPara);
  main.appendChild(headingDiv);
}

function createBoard() {
  const boardDiv = document.createElement('div');
  for (let i = 0; i < 9; i++) {
    const cellBtn = document.createElement('button');
    cellBtn.setAttribute('class', `cell${i}`);
    boardDiv.appendChild(cellBtn);
  }
  boardDiv.setAttribute('class', 'board');
  main.appendChild(boardDiv);
}
function displayResult() {
  const resultDiv = document.createElement('div');
  resultDiv.setAttribute('class', 'result');
  const resultPara = document.createElement('p');
  resultPara.textContent = 'Player X turn';
  resultDiv.appendChild(resultPara);
  main.appendChild(resultDiv);
}
createHeading();
displayResult();
createBoard();
