const clock = document.querySelector(".clock");

let seconds = 11;
function getTime() {
  const date = new Date();

  let amPm = "AM";

  // let hours = String(date.getHours()).padStart(2, "0");
  let hours = date.getHours();

  if (hours >= 12) amPm = "PM";
  if (hours >= 13) {
    hours %= 12;
  }
  hours = String(hours).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${amPm} ${hours}:${minutes}:${seconds}`;

  seconds++;
}
getTime();
setInterval(getTime, 1000);

// new date -> 날짜 기능 모두 포함 객체
