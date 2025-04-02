const darkModeButton = document.querySelector(".dark-mode-button");
// const body = document.querySelector("body");

// Controleer bij het laden of dark mode is ingeschakeld
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeButton.innerHTML = "&#9788";
  darkModeButton.style.backgroundColor = "#87CEEB";
  darkModeButton.style.color = "#FFEA00";
} else {
  body.classList.remove("dark-mode");
  darkModeButton.innerHTML = "&#9790";
  darkModeButton.style.backgroundColor = "#182c4c";
  darkModeButton.style.color = "#f2f0ef";
}

darkModeButton.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    darkModeButton.innerHTML = "&#9790";
    darkModeButton.style.backgroundColor = "#182c4c";
    darkModeButton.style.color = "#f2f0ef";
    // Sla de status van dark mode op als "disabled"
    localStorage.setItem("darkMode", "disabled");
  } else {
    body.classList.add("dark-mode");

    darkModeButton.innerHTML = "&#9788";
    darkModeButton.style.backgroundColor = "#87CEEB";
    darkModeButton.style.color = "#FFEA00";

    // Sla de status van dark mode op als "enabled"
    localStorage.setItem("darkMode", "enabled");
  }
});
