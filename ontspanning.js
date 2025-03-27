//RIP 27/03/25 klant niet tevreden
// const apiUrl = "https://meme-api.com/gimme";
// let memeCoins = 10;

// const fetchRandomMeme = async () => {
//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error(`http error with status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data.url;
//   } catch (error) {
//     console.error("error fetching meme:", error);
//   }
// };

// const renderRandomMeme = async () => {
//   const url = await fetchRandomMeme();
//   const img = document.createElement("img");
//   img.src = url;
//   const main = document.querySelector("main");
//   main.appendChild(img);
// };

// const displayMemeCoins = () => {
//   const p = document.getElementById("meme-coins");
//   p.innerHTML = `Meme Coins: ${memeCoins}`;
// };

// const memeButton = document.getElementById("meme-button");
// memeButton.addEventListener("click", () => {
//   const main = document.querySelector("main");
//   const img = document.querySelector("main img");
//   const oldP = document.getElementById("no-meme-coins");

//   if (img) {
//     main.removeChild(img);
//   }
//   if (oldP) {
//     main.removeChild(oldP);
//   }

//   if (memeCoins > 0) {
//     renderRandomMeme();
//     memeCoins -= 1;
//     displayMemeCoins();
//   } else {
//     const newP = document.createElement("p");
//     newP.innerHTML =
//       "Je hebt geen Meme Coins meer :( !! Wacht tot de timer is afgelopen.";
//     newP.id = "no-meme-coins";
//     main.appendChild(newP);
//   }
// });

// displayMemeCoins();

function randomActivity() {
  const activiteiten = [
    "🌳 Ga wandelen in het park!",
    "🚴‍♂️ Pak de fiets en ontdek een nieuw pad!",
    "🏋️ Doe een workout in de buitenlucht!",
    "📸 Maak een foto van iets moois in de natuur!",
    "☀️ Lees een boek in de zon!",
    "🧺 Ga picknicken met vrienden!",
    "⚽🏀 Speel een sport buiten!",
  ];
  document.getElementById("activity").innerText =
    activiteiten[Math.floor(Math.random() * activiteiten.length)];
}

function fetchWeather() {
  const temperaturen = [
    "☀️ 10°C - Koud maar zonnig",
    "🌤 18°C - Perfect om buiten te zijn",
    "🏖 25°C - Ideaal strandweer",
  ];
  document.getElementById("weather").innerText =
    "Weer: " + temperaturen[Math.floor(Math.random() * temperaturen.length)];
}

function fetchQuote() {
  const quotes = [
    "🌿 De natuur laadt je batterij op!",
    "💨 Frisse lucht, frisse gedachten!",
    "⚡ Buiten bewegen = meer energie!",
    "🌎 De beste ontspanning? Even offline gaan!",
  ];
  document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];
}

document.addEventListener("DOMContentLoaded", () => {
  fetchWeather();
  fetchQuote();
});
