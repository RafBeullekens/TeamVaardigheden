let workTime = 25 * 60; // 25 minutes
let restTime = 5 * 60; // 5 minutes
let timeLeft = workTime;
let isWorkSession = true;
let isRunning = false;
let timer;

const timeDisplay = document.getElementById("time-display");
const sessionTitle = document.getElementById("session-title");
const progressBar = document.getElementById("progress-bar");
const startPauseBtn = document.getElementById("start-pause-btn");
const resetBtn = document.getElementById("reset-btn");
const timeStartPause = document.getElementById("start-pause-btn");

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  progressBar.value = (timeLeft / (isWorkSession ? workTime : restTime)) * 100;
}

function toggleTimer() {
  if (isRunning) {
    clearInterval(timer);
    startPauseBtn.textContent = "Start";
  } else {
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        switchSession();
      }
    }, 1000);
    startPauseBtn.textContent = "Pause";
  }
  isRunning = !isRunning;
}

function switchSession() {
  isWorkSession = !isWorkSession;
  timeLeft = isWorkSession ? workTime : restTime;
  sessionTitle.textContent = isWorkSession ? "Work Time" : "Rest Time";
  updateDisplay();
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  isWorkSession = true;
  timeLeft = workTime;
  sessionTitle.textContent = "Work Time";
  updateDisplay();
  startPauseBtn.textContent = "Start";
}

// Attach event listeners
startPauseBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();

//Checks wether the timer started or is Paused

timeStartPause.addEventListener("click", () => {
  timeStartPause.classList.toggle("Pause");
});
