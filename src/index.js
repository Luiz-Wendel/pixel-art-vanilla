let currentColor = '#fff';
const maxBoardSize = 15;

const palleteContainer = document.querySelector('.pallete-container');
const board = document.querySelector('.board');
const configsButton = document.querySelector('.configs');
const configsAside = document.querySelector('.configs-aside');
const closeAsideButton = document.querySelector('.close-aside');
const boardSizeInput = document.querySelector('#board-size');

const createElement = (element) => {
  return document.createElement(element);
};

const generateRandomColor = () => {
  const hexArray = [...Array(6)].map(() => {
    return Math.floor(Math.random() * 16).toString(16);
  });

  const hexString = hexArray.join('');

  return hexString;
};

const selectColor = (event) => {
  const colorElement = event.target;
  const selectedColorElement = document.querySelector('.selected');

  if (selectedColorElement) selectedColorElement.classList.toggle('selected');

  currentColor = colorElement.dataset.color;

  colorElement.classList.toggle('selected');
};

const createColorDiv = (color) => {
  const colorElement = createElement('div');
  const colorString = color ? color : `#${generateRandomColor()}`

  colorElement.classList.add('pallete-color');
  colorElement.dataset.color = colorString;
  colorElement.style.backgroundColor = colorString;
  colorElement.addEventListener('click', selectColor);

  return colorElement;
};

const addColorToPallete = (quantity, color) => {
  for (let index = 0; index < quantity; index += 1) {
    const colorElement = createColorDiv(color);
    palleteContainer.appendChild(colorElement);
  }
};

const changeColor = (event) => {
  const cellElement = event.target;

  cellElement.style.backgroundColor = currentColor;
};

const addBoardCells = (fatherElement, quantity) => {
  for (let index = 0; index < quantity; index += 1) {
    const boardCellElement = createElement('section');

    boardCellElement.classList.add('board-cell');
    boardCellElement.addEventListener('click', changeColor);

    fatherElement.appendChild(boardCellElement);
  }
};

const createBoard = (size = 5) => {
  for (let index = 0; index < size; index += 1) {
    const boardRowElement = createElement('section');
    boardRowElement.classList.add('board-row');

    addBoardCells(boardRowElement, size);

    board.appendChild(boardRowElement);
  }
};

const toggleAside = ({ target }) => {
  if (target.parentElement.classList.contains('configs')) {
    configsButton.style.display = 'none';
    configsAside.style.display = 'block';
  } else {
    configsButton.style.display = 'block';
    configsAside.style.display = 'none';
  }
};

const changeBoardSize = ({ target }) => {
  board.innerHTML = '';

  if (target.value > maxBoardSize) target.value = maxBoardSize;

  createBoard(target.value);
};

window.onload = () => {
  addColorToPallete(4);
  createBoard();

  configsButton.addEventListener('click', toggleAside);
  closeAsideButton.addEventListener('click', toggleAside);
  boardSizeInput.addEventListener('change', changeBoardSize);
};
