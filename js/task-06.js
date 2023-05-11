const inputEl = document.getElementById('validation-input');
const allowedLength = inputEl.getAttribute('data-length');

inputEl.addEventListener("blur", changeBorderColor);

function changeBorderColor () {
    if (inputEl.value.length == allowedLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }    
};
