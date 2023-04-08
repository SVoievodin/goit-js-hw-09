
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let colorRefresher = null;

startBtn.addEventListener('click', colorChange);
stopBtn.addEventListener('click', stopColorChange);

function colorChange() {
    colorRefresher = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopColorChange() {
    clearInterval(colorRefresher);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

