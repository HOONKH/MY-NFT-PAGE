const clock = document.querySelector(".clock");

let seconds = 11;
function getTime() {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  clock.innerText = `${hours}:${minutes}:${seconds}`;

  seconds++;
}
getTime();
setInterval(getTime, 1000);

// new date -> 날짜 기능 모두 포함
