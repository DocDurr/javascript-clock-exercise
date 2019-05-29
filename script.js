
// The hr/min/sec position is called outside of the function.  As such, the browser running JavaScript can be potentially 
// throttled if user is on another tab. If this was running within the function, the hands would move from the 59/60 transition
// counter clockwise.  If you didn't want to utilize the browser process and run this within the function, you;d have to remove 
// the CSS animation transform/transition declarations. 

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// I'm referring to this block
let hrPosition = hr*(360/12)+(min*(360/60)/12);
let minPosition = min*(360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {

    htPosition = hrPosition+(30/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}



var interval = setInterval(runTheClock, 1000);




