document.getElementById("timer").innerHTML = 0 + ":" + 0 + ":" + 0;
document.getElementById("time").focus();
function startTimer() {
  console.log("inside");
  let [hr, min, sec] = document.getElementById("time").value.split(":");
  let timer = setInterval(function() {
    sec--;
    if (sec < 0) {
      sec = 0;
    }
    document.getElementById("timer").innerHTML = hr + ":" + min + ":" + sec;
    if (hr == 0 && min == 0 && sec == 0) {
      document.getElementById("timer").innerHTML = hr + ":" + min + ":" + sec;
      clearInterval(timer);
    }
    if (sec == 0) {
      sec = 60;
      min--;
    }
    if (min == 0 && hr != 0) {
      min = 60;
      hr--;
    }
    if (hr == 0) {
      hr = 0;
      min = min;
      sec = sec;
    }
  }, 1000);
}
