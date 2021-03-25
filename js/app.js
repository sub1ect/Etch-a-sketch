//create board
const createBoard = (num = 16) => {
  const body = document.querySelector('body');

  const container = document.createElement('div');
  container.classList.add('container');
  container.style.cssText = `
      display: grid;
      grid-template-columns: repeat(${num}, 1fr);
      grid-template-rows: repeat(${num}, 1fr);
  `;

  for (let i = 0; i < num * num; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    container.append(div);
  }

  body.append(container);
};

createBoard();

// color the board
const colorBoard = () => {
  const divs = document.querySelectorAll('.box');
  const color = document.querySelector('.color');

  let mouseClicked = false;

  document.querySelector('.container').addEventListener('click', () => {
    mouseClicked ? (mouseClicked = false) : (mouseClicked = true);
  });

  divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      if (mouseClicked) {
        div.style.backgroundColor = color.value;
      }
    });
  });
};

colorBoard();

// clear the board
const clearBoard = () => {
  const btn = document.querySelector('.clear');
  const divs = document.querySelectorAll('.box');

  btn.addEventListener('click', () => {
    divs.forEach((div) => {
      div.style.backgroundColor = 'white';
    });
  });
};

clearBoard();

// delete previous board
const deleteBoard = () => {
  const container = document.querySelector('.container');
  container.remove();
};

// change size
const size = document.querySelector('.size');
size.addEventListener('click', () => {
  number = prompt('What size of the board you need?');

  if (number > 100) {
    alert('Board size cannot be larger than 100x100.');
  } else {
    deleteBoard();
    createBoard(number);
    colorBoard();
    clearBoard();
  }
});
