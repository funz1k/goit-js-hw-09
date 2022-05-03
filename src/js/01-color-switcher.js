const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]')
}

let timeoutID = null;

refs.stopBtn.setAttribute('disabled', 'disabled')
refs.startBtn.addEventListener('click', onStartSwitchColor);
refs.stopBtn.addEventListener('click', onStopSwitchColor);

function onStartSwitchColor(e) {
    timeoutID = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    refs.startBtn.setAttribute('disabled', 'disabled')
    refs.stopBtn.removeAttribute('disabled', 'disabled')
}


function onStopSwitchColor(e) {
    clearInterval(timeoutID)
    refs.stopBtn.setAttribute('disabled', 'disabled')
    refs.startBtn.removeAttribute('disabled', 'disabled')
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
