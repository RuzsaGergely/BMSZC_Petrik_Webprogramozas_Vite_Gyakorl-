var interval;
var totalSeconds = 0;
var start_time = null;
var current_time = null;
function pad(val) { return val > 9 ? val : "0" + val; }


function startTimer() {
  if(start_time == null){
    start_time = new Date()
  }
  if(current_time == null){
    current_time = new Date();
  }

  totalSeconds = Math.round(Math.abs(start_time.getTime() - current_time.getTime()) / 1000);
  interval = setInterval(function () {
    document.getElementById("seconds").innerText = pad(++totalSeconds % 60)
    document.getElementById("minutes").innerText = pad(parseInt(totalSeconds / 60, 10) % 60)
    document.getElementById("hours").innerText = pad(parseInt(totalSeconds / 3600, 10))
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval)
  interval = null;
  current_time = new Date()
}

function reset() {
  totalSeconds = 0;
  document.getElementById("seconds").innerText = "00"
  document.getElementById("minutes").innerText = "00"
  document.getElementById("hours").innerText = "00"
  start_time = null;
  current_time = null;
}