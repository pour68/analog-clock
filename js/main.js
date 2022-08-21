// analog clock
const hourHandle = document.getElementById("hour-handle");
const minuteHandle = document.getElementById("minute-handle");
const secondHandle = document.getElementById("second-handle");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const timeStatus = document.getElementById("status");

const timeFormat = (value) => (value < 10 ? `0${value}` : value);
const statusValue = (value) => (value < 12 ? "AM" : "PM");

setInterval(() => {
  const currentDate = new Date();
  let hour = currentDate.getHours() * 30;
  let minute = currentDate.getMinutes() * 6;
  let second = currentDate.getSeconds() * 6;

  hourHandle.style.transform = `rotateZ(${hour + minute / 12}deg)`;
  minuteHandle.style.transform = `rotateZ(${minute}deg)`;
  secondHandle.style.transform = `rotateZ(${second}deg)`;
}, 1000);

setInterval(() => {
  const currentDate = new Date();

  hour.innerHTML = timeFormat(currentDate.getHours());
  minute.innerHTML = timeFormat(currentDate.getMinutes());
  second.innerHTML = timeFormat(currentDate.getSeconds());
  timeStatus.innerHTML = statusValue(hour);
}, 1000);
