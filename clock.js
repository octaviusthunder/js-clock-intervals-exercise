//all copied from your notes and W3 schools


var sDeg = 45;
var mDeg = 55;
var hDeg = 65;
var rightNow = Date.now();
var d = new Date();
var n = d.getHours();

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function myFunction() {
    var d = new Date();
    var x = document.getElementById("clock");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    x.innerHTML = h + ":" + m + ":" + s;
  }

// today.getHour
// today.getSecond
// today.getMinute

// Grab hour, second, and minute, and store them in variables.

// Grab each of the items that represent the hands of the clock 
// from our index.html and store those as variables

// create function that uses set interval to trigger of new or 
//updated hours seconds and minutes values and correspond those values 
//with the calucalated values for degree rotation of the clock

// set interval function, DOM manipulation grab element, transform

var el = document.getElementById("second");
el.style.transform = "rotate(" + sDeg + "deg)";

var el2 = document.getElementById("minute");
el2.style.transform = "rotate(" + mDeg + "deg)";

var el3 = document.getElementById("hour");
el3.style.transform = "rotate(" + hDeg + "deg)";

/*
function secondRotation() {
    var second = document.getElementById("second");
    second.style.transform = "rotate(" + sDeg + "deg)";
}

function minuteRotation() {
    var minute = document.getElementById("minute");
    minute.style.transform = "rotate(" + mDeg + "deg)";
}

function hourRotation() {
    var hour = document.getElementById("hour");
    hour.style.transform = "rotate(" + hDeg + "deg)";
}
*/
