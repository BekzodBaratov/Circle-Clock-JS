// // variables
let weekDays = document.querySelector(".weekday");
let hourHand = document.querySelector("[data-hour-hand]");
let minuteHand = document.querySelector("[data-minute-hand]");
let secondHand = document.querySelector("[data-second-hand]");
let qush = 0;

// ----------------------------------
setInterval(setClock, dateDay, 1000);

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function dateDay() {
  let currentDate = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let uzb = new Intl.DateTimeFormat("uz-Uz", options).format(currentDate);

  return uzb;
}

setInterval(() => {
  weekDays.textContent = dateDay();
}, 1000);

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
