let workTime = 25 * 60; // 25 minutes
let restTime = 5 * 60; // 5 minutes
let timeLeft = workTime;
let isWorkSession = true;
let isRunning = false;
let timer;
let firstTimeClickedStart = true;

const timeDisplay = document.getElementById("time-display");
const sessionTitle = document.getElementById("session-title");
const progressBar = document.getElementById("progress-bar");
const startPauseBtn = document.getElementById("start-pause-btn");
const resetBtn = document.getElementById("reset-btn");
const timeStartPause = document.getElementById("start-pause-btn");
const timeReset = document.getElementById("reset-btn");

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  progressBar.value = (timeLeft / (isWorkSession ? workTime : restTime)) * 100;
}

function toggleTimer() {
  if (isRunning) {
    clearInterval(timer);
    startPauseBtn.setAttribute("data-i18n", "pomodoro.start");
    startPauseBtn.textContent =
      window.languageManager.getText("pomodoro.start");
  } else {
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        switchSession();
      }
    }, 1000);
    startPauseBtn.setAttribute("data-i18n", "pomodoro.pause");
    startPauseBtn.textContent =
      window.languageManager.getText("pomodoro.pause");
  }
  isRunning = !isRunning;
}

function switchSession() {
  isWorkSession = !isWorkSession;
  timeLeft = isWorkSession ? workTime : restTime;
  sessionTitle.setAttribute(
    "data-i18n",
    isWorkSession ? "pomodoro.workTime" : "pomodoro.restTime"
  );
  sessionTitle.textContent = window.languageManager.getText(
    isWorkSession ? "pomodoro.workTime" : "pomodoro.restTime"
  );
  updateDisplay();
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  isWorkSession = true;
  timeLeft = workTime;
  sessionTitle.setAttribute("data-i18n", "pomodoro.workTime");
  sessionTitle.textContent =
    window.languageManager.getText("pomodoro.workTime");
  updateDisplay();
  startPauseBtn.setAttribute("data-i18n", "pomodoro.start");
  startPauseBtn.textContent = window.languageManager.getText("pomodoro.start");
}

// Attach event listeners
startPauseBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();

//Checks whether the timer started or is Paused
timeStartPause.addEventListener("click", () => {
  if (firstTimeClickedStart) {
    firstTimeClickedStart = false;
    timeStartPause.classList.toggle("Pause");
  } else {
    timeStartPause.classList.toggle("Pause");
    if (timeStartPause.classList.contains("Pause")) {
      console.log("pause true");
      timeStartPause.setAttribute("data-i18n", "pomodoro.pause");
      timeStartPause.textContent =
        window.languageManager.getText("pomodoro.pause");
    } else {
      console.log("pause false");
      timeStartPause.setAttribute("data-i18n", "pomodoro.resume");
      timeStartPause.textContent =
        window.languageManager.getText("pomodoro.resume");
    }
  }
});

//resets the counter so the button shows start again when you reset
timeReset.addEventListener("click", () => {
  if (timeStartPause.classList.contains("Pause")) {
    timeStartPause.classList.toggle("Pause");
  }
  timeStartPause.setAttribute("data-i18n", "pomodoro.start");
  timeStartPause.textContent = window.languageManager.getText("pomodoro.start");
  firstTimeClickedStart = true;
});
