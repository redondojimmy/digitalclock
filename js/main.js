function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }; // add zero in front of numbers < 10
  return i;
}
(function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = "am";
  var hh = h;
  window.rawHours = h;
  if (h >= 12) {
    h = hh - 12;
    ampm = "pm";
  }
  if (h == 0) {
    h = 12;
  }
  m = checkTime(m);
  s = checkTime(s);
  window.minutes = m;
  document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s + ampm;
  var t = setTimeout(startTime, 500);
})();
