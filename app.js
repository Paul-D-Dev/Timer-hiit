let timerSession = 0;
let timerWorkOut = 3;
let timerBreak = 2;
let rounds = 2;
const totalTimeWorkOut = timerWorkOut + timerBreak
timerSession = totalTimeWorkOut * rounds;

let series = 0;
let isPaused = false;

let intervalSession;
let intervalWorkOut;
let intervalBreak;
let setTimeBreak;

document.getElementById('timerSession').innerHTML = timerSession;
document.getElementById('timerWorkOut').innerHTML = timerWorkOut;
document.getElementById('timerBreak').innerHTML = timerBreak;
document.getElementById('series').innerHTML = series;
const btnStart = document.getElementById('start');
const btnPause = document.getElementById('pause');
const btnStop = document.getElementById('stop');
btnStart.addEventListener('click', start);
btnPause.addEventListener('click', pause);
btnStop.addEventListener('click', stopSession);

function start() {
    isPaused = false;
    intervalSession = setInterval(() => {
        document.getElementById('timerSession').innerHTML = timerSession;

        if (timerSession % totalTimeWorkOut === 0 && isPaused === false) {
            if (series < rounds) {
                cycle()
            } else {
                clearInterval(intervalSession);
            }
        }
        
        timerSession--;
    }, 1000);
}

function descreaseTime(interval, labelTime, timer, time) {
    return setInterval(() => {
        if (timer === 0) {
            clearInterval(interval);
            timer = time
            document.getElementById(labelTime).innerHTML = timer;
        } else {
            timer--;
        }
        document.getElementById(labelTime).innerHTML = timer;   
    }, 1000);
}

function cycle() {
    intervalWorkOut = descreaseTime(intervalWorkOut, 'timerWorkOut', timerWorkOut, timerWorkOut);
    setTimeBreak = setTimeout(() => {
        intervalBreak = descreaseTime(intervalBreak, 'timerBreak', timerBreak, timerBreak);
        series++;
        document.getElementById('series').innerHTML = series;        
    }, timerWorkOut * 1000);
}

function pause() {
    console.log(intervalSession);
    console.log(intervalWorkOut);
    isPaused = !isPaused;
    if (isPaused === true) {
        clearInterval(intervalSession);
        clearInterval(intervalWorkOut);
        clearInterval(intervalBreak);
        clearTimeout(setTimeBreak); 
    } else {
        cycle();        
    }
}

function stopSession() {
    console.log(intervalSession);
    console.log(intervalWorkOut);
    clearInterval(intervalSession);
    clearInterval(intervalWorkOut);
    clearInterval(intervalBreak);
}


