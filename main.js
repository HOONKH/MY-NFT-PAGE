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

const QUOTES_LIST = "quotesList";
// new date -> 날짜 기능 모두 포함 객체

function getQuotes() {
  const quotes = document.querySelector(".quotes");

  let savedQuotes = localStorage.getItem(QUOTES_LIST);

  if (!savedQuotes) {
    localStorage.setItem(
      QUOTES_LIST,
      JSON.stringify(["Continuous Improvement"])
    );
    savedQuotes = localStorage.getItem(QUOTES_LIST);
  }
  let parsedQuotes = JSON.parse(savedQuotes);
  // 없으면 하나 생성
  quotes.innerText =
    parsedQuotes[Math.floor(Math.random() * parsedQuotes.length)];
}
getQuotes();

function onClickNewQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotesInput = document.querySelector(".new-quotes-input");

  if (!newQuotesInput.value) return;

  // 로컬 스토리지에 저장
  let savedQuotes = localStorage.getItem(QUOTES_LIST);
  let parsedQuotes = JSON.parse(savedQuotes);

  parsedQuotes.push(newQuotesInput.value);

  localStorage.setItem(QUOTES_LIST, JSON.stringify(parsedQuotes));

  // 현재 페이지 반영
  quotes.innerText = newQuotesInput.value;
  newQuoteInput.value = "";
}
