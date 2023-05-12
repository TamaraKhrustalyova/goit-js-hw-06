const nameEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

nameEl.addEventListener("input", greetingVisitor);

function greetingVisitor (event) {
    outputEl.textContent = !event.currentTarget.value ? 
        'Anonymous' :
        outputEl.textContent = event.currentTarget.value;
    };
  