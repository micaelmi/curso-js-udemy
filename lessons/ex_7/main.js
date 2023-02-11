const timer = document.querySelector('.timer');

document.addEventListener("click", function (event) {
    const element = event.target;

    if (element.classList.contains('play')) start();
    if (element.classList.contains('pause')) stop();
    if (element.classList.contains('zero')) restart();
});

let hours = 0, minutes = 0, seconds = 0;
let playTimer;

function formatTime(num) {
    return num < 10 ? '0' + num : num;
}

function showTimer() {

    if (seconds > 59) {
        seconds = 0;
        minutes++;
    }
    if (minutes > 59) {
        minutes = 0;
        hours++;
    }

    timer.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function start() {
    clearInterval(playTimer);
    timer.classList.remove('paused');
    playTimer = setInterval(function () {
        seconds++;
        showTimer();
    }, 1000);
}

function stop() {
    timer.classList.add('paused');
    clearInterval(playTimer);
    showTimer();
}

function restart() {
    timer.classList.remove('paused');
    clearInterval(playTimer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    showTimer();
}