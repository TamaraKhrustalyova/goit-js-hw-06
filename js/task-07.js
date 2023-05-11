const sliderEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

sliderEl.addEventListener("input", changeFontSize);

function changeFontSize (event) {
    textEl.style.fontSize = sliderEl.value +'px';
}
