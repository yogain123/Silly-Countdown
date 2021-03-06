document.getElementById("timer").innerHTML = "00:00:00";
document.getElementById("time").focus();
function startTimer() {
  console.log("inside");
  let [hr, min, sec] = document.getElementById("time").value.split(":");
  let timer = setInterval(function() {
    sec--;
    if (sec < 0) {
      sec = 0;
    }
    printer(hr, min, sec);
    if (hr == 0 && min == 0 && sec == 0) {
      printer(hr, min, sec);
      clearInterval(timer);
    }
    if (min == 0 && sec == 0) {
      min = 60;
      hr--;
    }
    if (sec == 0) {
      sec = 60;
      min--;
    }
    if (min == 0 && hr != 0) {
      min = 59;
      hr--;
    }
  }, 1000);
}

function printer(hr, min, sec) {
  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  hr = hr < 10 ? "0" + hr : hr;
  document.getElementById("timer").innerHTML = hr + ":" + min + ":" + sec;
}
