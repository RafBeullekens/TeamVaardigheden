const darkModeButton = document.querySelector(".dark-mode-button");
const body = document.querySelector("body");

darkModeButton.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    darkModeButton.innerHTML = "&#9790";
    darkModeButton.style.backgroundColor = "#182c4c";
    darkModeButton.style.color = "#f2f0ef";
  } else {
    body.classList.add("dark-mode");

    darkModeButton.innerHTML = "&#9788";
    darkModeButton.style.backgroundColor = "#87CEEB";
    darkModeButton.style.color = "#FFEA00";
  }
});
