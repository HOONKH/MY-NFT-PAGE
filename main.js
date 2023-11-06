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
  const newQuotes = document.querySelector(".new-quotes");
  const newQuotesInput = document.querySelector(".new-quotes-input");

  if (!newQuotesInput.value) return;

  // 로컬 스토리지에 저장
  let savedQuotes = localStorage.getItem(QUOTES_LIST);
  let parsedQuotes = JSON.parse(savedQuotes);

  parsedQuotes.push(newQuotesInput.value);

  localStorage.setItem(QUOTES_LIST, JSON.stringify(parsedQuotes));

  // 현재 페이지 반영
  quotes.innerText = newQuotesInput.value;
  newQuotesInput.value = "";
  // block이 디스플레이 속성 주는것 none은 디스플레이 없애는것
  quotes.style.display = "block";
  newQuotes.style.display = "none";
}

function onClickQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");

  quotes.style.display = "none";
  newQuotes.style.display = "block";
}
async function getNft() {
  const nftImg = document.querySelector(".nft-img");
  const nftName = document.querySelector(".nft-name");
  const nftDesc = document.querySelector(".nft-desc");

  const response = await axios.get(
    "https://olbm.mypinata.cloud/ipfs/QmVtFwYyuMvqNkkAxaQqavoNVJWLsgQ9WPjTokUvmw3HFn"
  );

  nftImg.src = response.data.image;
  nftName.innerText = response.data.name;
  nftDesc.innerText = response.data.description;
}

getNft();
