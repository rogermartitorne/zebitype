import {
  englishTexts as EN_TEXTS,
  spanishTexts as ES_TEXTS,
  russianTexts as RU_TEXTS,
  latvianTexts as LV_TEXTS,
} from "./texts.js";

const $time = document.querySelector("time");
const $paragraph = document.querySelector("p");
const $input = document.querySelector("input");
const $game = document.querySelector("#game");
const $results = document.querySelector("#results");
const $wpm = document.querySelector("h3");
const $accuracy = document.querySelector("h3:nth-child(4)");
const $btn = document.getElementById("btn");

let INITIAL_TIME = 3;
let words = [];
let currentTime = INITIAL_TIME;
let playing;
let TEXT;

let selectedLanguage = EN_TEXTS;
let selectedSeconds;

document.querySelectorAll('input[name="lang"]').forEach(function (radio) {
  radio.addEventListener("change", function () {
    selectedLanguage = document.querySelector(
      'input[name="lang"]:checked'
    ).value;
    languageSelect();
  });
});

document.querySelectorAll('input[name="seconds"]').forEach(function (radio) {
  radio.addEventListener("change", function () {
    selectedSeconds = document.querySelector(
      'input[name="seconds"]:checked'
    ).value;
    timeSelect();
  });
});

initGame();
initEvents();

function initGame() {
  $game.style.display = "flex";
  $results.style.display = "none";
  $input.value = "";

  playing = false;

  TEXT = selectedLanguage[Math.floor(Math.random() * 9)];
  words = TEXT.slice("").split(" ");

  currentTime = INITIAL_TIME;
  $time.textContent = currentTime;

  $paragraph.innerHTML = words
    .map((word, index) => {
      const letters = word.split("");

      return `<word>${letters
        .map((letter) => `<letter>${letter}</letter>`)
        .join("")}</word>`;
    })
    .join(" ");

  const $firstWord = $paragraph.querySelector("word");
  $firstWord.classList.add("active");
  $firstWord.querySelector("letter").classList.add("active");
}

function initEvents() {
  $input.addEventListener("keydown", (event) => {
    if (!playing) {
      playing = true; // Set playing to true when the game starts
      const intervalId = setInterval(() => {
        currentTime--;
        $time.textContent = currentTime;

        if (currentTime === 0) {
          clearInterval(intervalId);
          gameOver();
        }
      }, 1000);
    }
    onKeyDown(event);
  });

  $input.addEventListener("keyup", onKeyUp);
  $btn.addEventListener("click", initGame);
}

function onKeyDown(event) {
  const $currentWord = $paragraph.querySelector("word.active");
  const $currentLetter = $currentWord.querySelector("letter.active");

  const { key } = event;
  if (key === " ") {
    event.preventDefault();

    const $nextWord = $currentWord.nextElementSibling;
    const $nextLetter = $nextWord.querySelector("letter");

    $currentWord.classList.remove("active", "marked");
    $currentLetter.classList.remove("active");

    $nextWord.classList.add("active");
    $nextLetter.classList.add("active");

    $input.value = "";

    const hasMissedLetters =
      $currentWord.querySelectorAll("letter:not(.correct)").length > 0;

    const classToAdd = hasMissedLetters ? "marked" : "correct";
    $currentWord.classList.add(classToAdd);

    return;
  }

  if (key === "Backspace") {
    const $prevWord = $currentWord.previousElementSibling;
    const $prevLetter = $currentLetter.previousElementSibling;

    if (!$prevWord && !$prevLetter) {
      event.preventDefault();
      return;
    }

    const $wordMarked = $paragraph.querySelector("word.marked");
    if ($wordMarked && !$prevLetter) {
      event.preventDefault();
      $prevWord.classList.remove("marked");
      $prevWord.classList.add("active");

      const $letterToGo = $prevWord.querySelector("letter:last-child");

      $currentLetter.classList.remove("active");
      $letterToGo.classList.add("active");

      $input.value = [
        ...$prevWord.querySelectorAll("letter.correct, letter.incorrect"),
      ]
        .map(($el) => {
          return $el.classList.contains("correct") ? $el.innerText : "*";
        })
        .join("");
    }
  }
}

function onKeyUp() {
  const $currentWord = $paragraph.querySelector("word.active");
  const $currentLetter = $paragraph.querySelector("letter.active");

  const currentWord = $currentWord.innerText.trim();
  $input.maxLength = currentWord.length;

  const $allLetters = $currentWord.querySelectorAll("letter");
  $allLetters.forEach(($letter) =>
    $letter.classList.remove("correct", "incorrect")
  );

  $input.value.split("").forEach((char, index) => {
    const $letter = $allLetters[index];
    const letterToCheck = currentWord[index];

    const isCorrect = char === letterToCheck;
    const letterClass = isCorrect ? "correct" : "incorrect";
    $letter.classList.add(letterClass);
  });

  $currentLetter.classList.remove("active", "is-last");
  const inputLength = $input.value.length;
  const $nextActiveLetter = $allLetters[inputLength];

  if ($nextActiveLetter) {
    $nextActiveLetter.classList.add("active");
  } else {
    $currentLetter.classList.add("active", "is-last");
    // TODO: gameover si no hay próxima palabra
    // gameOver();
  }
}

function languageSelect() {
  switch (selectedLanguage) {
    case "en":
      TEXT = EN_TEXTS[Math.floor(Math.random() * 9)];
      words = TEXT.slice("").split(" ");
      break;

    case "es":
      TEXT = ES_TEXTS[Math.floor(Math.random() * 9)];
      words = TEXT.slice("").split(" ");
      break;

    case "ru":
      TEXT = RU_TEXTS[Math.floor(Math.random() * 9)];
      words = TEXT.slice("").split(" ");
      break;

    case "lv":
      TEXT = LV_TEXTS[Math.floor(Math.random() * 9)];
      words = TEXT.slice("").split(" ");
      break;
  }
  $paragraph.textContent = TEXT;
}

function timeSelect() {
  switch (selectedSeconds) {
    case "30":
      INITIAL_TIME = 30;
      break;
    case "60":
      INITIAL_TIME = 60;
      break;
    case "90":
      INITIAL_TIME = 90;
      break;
    case "120":
      INITIAL_TIME = 120;
      break;
  }
  currentTime = INITIAL_TIME;
  $time.textContent = currentTime;

  // Clear the existing interval
  clearInterval(intervalId);

  // Set up a new interval
  intervalId = setInterval(() => {
    currentTime--;
    $time.textContent = currentTime;

    if (currentTime === 0) {
      clearInterval(intervalId);
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  $game.style.display = "none";
  $results.style.display = "flex";

  const correctWords = $paragraph.querySelectorAll("word.correct").length;
  const correctLetter = $paragraph.querySelectorAll("letter.correct").length;
  const incorrectLetter =
    $paragraph.querySelectorAll("letter.incorrect").length;

  const totalLetters = correctLetter + incorrectLetter;

  const accuracy = totalLetters > 0 ? (correctLetter / totalLetters) * 100 : 0;
  const wpm = (correctWords * 60) / INITIAL_TIME;
  $wpm.textContent = wpm;
  $accuracy.textContent = `${accuracy.toFixed(2)}%`;
}
