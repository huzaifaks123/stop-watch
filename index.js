// getting element for buttons 
let playButton = document.getElementById('play');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');

// setting variables for our use
let min = 0;
let sec = 0;
let count = 0;
let timer = false;
let initialTime;
let currentTime = 0;

// function to start on button click
playButton.addEventListener('click', function () {
    playButton.disabled = true;
    timer = true;
    // setting initial time based on current time to continue counting
    initialTime = (new Date()).getTime() - currentTime;
    stopwatch();
});

// function to stop on button click
pauseButton.addEventListener('click', function () {
    timer = false;
    playButton.disabled = false;
    // setting current time based on initial time to maintain current value
    currentTime = (new Date()).getTime() - initialTime;
});

// function to reset on button click
resetButton.addEventListener('click', function () {
    timer = false;
    initialTime = null;
    currentTime = 0;
    playButton.disabled = false;
    // resetting digits to zero
    min = 0;
    sec = 0;
    count = 0;
    // resetting timer to initial value
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("cnt").innerHTML = "00";
});

function stopwatch() {

    let now = (new Date()).getTime();
    let diff = now - initialTime;

    if (timer) {

        let timeString = (new Date(diff).toISOString().slice(14, 23));
        console.log(timeString)
        min = timeString.substring(0, 2);
        sec = timeString.substring(3, 5);
        count = timeString.substring(7, 9);

        // setting min, sec, and count to DOM
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("cnt").innerHTML = count;
        requestAnimationFrame(stopwatch);
    }
}
