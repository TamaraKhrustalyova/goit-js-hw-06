const nameEl = document.getElementById('name-input');
console.log(nameEl);
const outputEl = document.getElementById('name-output');
console.log(outputEl);

nameEl.addEventListener("input", greetingVisitor);

function greetingVisitor (event) {
    outputEl.textContent = !event.currentTarget.value ? 
        'Anonymous' :
        outputEl.textContent = event.currentTarget.value;
    };
  