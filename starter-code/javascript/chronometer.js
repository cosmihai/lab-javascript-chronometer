// Constructor
 function Chronometer() {
  this.currentTime=0;
  this.intervalId=0;
}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervalId = setInterval(function() {
    that.currentTime++;
    that.setTime();
  }, 10);
};

Chronometer.prototype.setMinutes = function () {
  var minutes = Math.floor(this.currentTime/6000 );
  return minutes;
};

 Chronometer.prototype.setSeconds = function () {
  var totalSeconds = Math.floor(this.currentTime/100 ); 
  var seconds = totalSeconds%60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  return ('0'+number).slice(-2);
};

Chronometer.prototype.setTime = function () {
  document.getElementById('minDec').innerText = this.twoDigitsNumber(this.setMinutes())[0];
  document.getElementById('minUni').innerText = this.twoDigitsNumber(this.setMinutes())[1];
  document.getElementById('secDec').innerText = this.twoDigitsNumber(this.setSeconds())[0];
  document.getElementById('secUni').innerText = this.twoDigitsNumber(this.setSeconds())[1];
  document.getElementById('milDec').innerText = this.twoDigitsNumber(this.setMilliseconds())[0];
  document.getElementById('milUni').innerText = this.twoDigitsNumber(this.setMilliseconds())[1];
};

Chronometer.prototype.setMilliseconds = function () {
  var miliseconds = Math.floor(this.currentTime%100 ); 
  return miliseconds;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  this.intervalId=0;
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  this.intervalId=0;
};

Chronometer.prototype.splitClick = function () {
  return this.currentTime
};
