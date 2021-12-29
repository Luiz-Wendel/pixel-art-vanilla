const palleteContainer = document.querySelector('.pallete-container');

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

const createColorDiv = (color) => {
  const colorElement = createElement('div');
  const colorString = color ? color : `#${generateRandomColor()}`

  colorElement.classList.add('pallete-color');
  colorElement.dataset.color = colorString;
  colorElement.style.backgroundColor = colorString;

  return colorElement;
};

const addColorToPallete = (quantity, color) => {
  for (let index = 0; index < quantity; index += 1) {
    const colorElement = createColorDiv(color);
    palleteContainer.appendChild(colorElement);
  }
};

window.onload = () => {
  addColorToPallete(4);
};
