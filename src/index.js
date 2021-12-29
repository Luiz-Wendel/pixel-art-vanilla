const palleteContainer = document.querySelector('.pallete-container');
const board = document.querySelector('.board');

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

const addBoardCells = (fatherElement, quantity) => {
  for (let index = 0; index < quantity; index += 1) {
    const boardCellElement = createElement('section');
    boardCellElement.classList.add('board-cell');

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

window.onload = () => {
  addColorToPallete(4);
  createBoard();
};
