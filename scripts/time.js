//Time.js
//This file contains the scripts for the dynamic clock

const clock = document.querySelector('.clock');
//Function credit: Robby Cornelissen from https://stackoverflow.com/questions/53426551/javascript-getting-hour-and-min-from-epoch-value
function convert(t) {
    const dt = new Date(t);
    const h = dt.getUTCHours();
    const m = "0" + dt.getUTCMinutes();
    const s = "0" + dt.getUTCSeconds();
    clock.innerHTML =  `
    <span>${h}</span>
    <span>${m}</span>
    <span>${s}</span>
    `;
    console.log(clock);
  }
