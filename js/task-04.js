const buttonEl = document.querySelectorAll('button');
console.log(buttonEl);
const counterEl = document.getElementById('value');
console.log(counterEl.textContent);

let counterValue = 0;

const handleClickSubtract = () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
    console.log(counterValue);
  };
  
  const handleClickAdd = () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
    console.log(counterValue);
  };

  buttonEl[0].addEventListener("click", handleClickSubtract);
  buttonEl[1].addEventListener("click", handleClickAdd);

