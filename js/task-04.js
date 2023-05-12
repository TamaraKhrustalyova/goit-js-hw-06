const buttonEl = document.querySelectorAll('button');
const counterEl = document.getElementById('value');

let counterValue = 0;

const handleClickSubtract = () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
  };
  
  const handleClickAdd = () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
  };

  buttonEl[0].addEventListener("click", handleClickSubtract);
  buttonEl[1].addEventListener("click", handleClickAdd);

