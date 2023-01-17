
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    saveBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body')
}

let timerId = null;

refs.startBtn.addEventListener('click', clickToStart);
refs.saveBtn.addEventListener('click', clickToStop);

refs.saveBtn.setAttribute("disabled", "disabled");

function clickToStart() {
    setAttributeToStart()
    timerId = setInterval(() => {
       refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function clickToStop() {
    setAttributeToStop()
    clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setAttributeToStart() {
     refs.startBtn.setAttribute("disabled", "disabled");
     refs.saveBtn.removeAttribute("disabled");
}

function setAttributeToStop() {
    refs.startBtn.removeAttribute("disabled");
    refs.saveBtn.setAttribute("disabled", "disabled");
}