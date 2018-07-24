var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitsParent= document.getElementById('splits');


var on = false;


function printTime() {
  return printMinutes()+':'+printSeconds()+':'+printMilliseconds();
}

function printMinutes() {
  var min = minDec.innerText+minUni.innerText;
  return min;
}

function printSeconds() {
  var sec = secDec.innerText+secUni.innerText;
  return sec;
}

function printMilliseconds() {
  var milisec = milDec.innerText+milUni.innerText;
  return milisec;
}

function printSplit() {
  var split = document.createElement('li');

  splitsParent.appendChild(split);
  split.innerText = printTime();
}

function clearSplits() {
  splitsParent.innerHTML = '';
}

function setStopBtn() {
  chronometer.stopClick();
  on = !on;
  btnLeft.innerText = "START";
  btnRight.innerText = "RESET";
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  time = chronometer.startClick();
  on = !on;
  btnLeft.innerText = "STOP";
  btnRight.innerText = "SPLIT";
}

function setResetBtn() {
  clearSplits();
  chronometer.resetClick();
  minDec.innerText = '0';
  minUni.innerText = '0';
  secDec.innerText = '0';
  secUni.innerText = '0';
  milDec.innerText = '0';
  milUni.innerText = '0';

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(!on) {
    setStartBtn();
  }else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(on) {
    setSplitBtn();
  }else {
    setResetBtn();
  }
});
