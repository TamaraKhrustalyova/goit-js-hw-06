
  const bodyEl = document.querySelector('body');
  const buttonEl = document.querySelector('.change-color');
  const colorEl = document.querySelector('.color');

  console.log(bodyEl);
  console.log(buttonEl);

buttonEl.addEventListener('click', changeBackgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  getRandomHexColor();
  let randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
}



