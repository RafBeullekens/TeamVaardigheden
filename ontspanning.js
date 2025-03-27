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

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".sidebar button");
  const sections = document.querySelectorAll(".content section");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const sectionId = this.textContent.trim().toLowerCase();

      sections.forEach((section) => {
        if (section.id.toLowerCase() === sectionId) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });

  // Zorg dat standaard alleen de eerste sectie zichtbaar is
  sections.forEach((section, index) => {
    section.style.display = index === 0 ? "block" : "none";
  });
});

function randomActivity() {
  const activiteiten = [
    "🌳 Ga wandelen in het park!",
    "🚴‍♂️ Pak de fiets en ontdek een nieuw pad!",
    "🏋️ Doe een workout in de buitenlucht!",
    "📸 Maak een foto van iets moois in de natuur!",
    "☀️ Lees een boek in de zon!",
    "🧺 Ga picknicken met vrienden!",
    "⚽🏀 Speel een sport buiten!",
    "🎣 Ga vissen aan een meer of rivier!",
    "🌿 Doe een rondje mindfulness in de natuur!",
    "🎨 Neem een schetsboek en teken buiten!",
    "🔥 Maak een kampvuur en rooster marshmallows!",
    "🦆 Voer de eendjes in een vijver!",
    "⛰️ Ga hiken en ontdek een mooie route!",
    "🛶 Huur een kajak of kano en peddel rond!",
    "🛴 Probeer een elektrische step in de stad!",
    "🌕 Ga 's avonds sterren kijken!",
    "🐕 Neem een hond (of leen er een) voor een wandeling!",
    "🌲 Doe een bosbad (shinrin-yoku) en geniet van de natuur!",
    "🎭 Ga naar een openluchtoptreden of straatmuzikant luisteren!",
    "🏖️ Bouw een zandkasteel als je bij het strand bent!",
    "🌻 Bezoek een botanische tuin of een bloemenveld!",
    "🚜 Ga naar een boerderij en knuffel dieren!",
    "🧘 Doe een korte yogasessie in de zon!",
    "🎾 Probeer een nieuwe sport zoals frisbee, badminton of padel!",
    "📖 Start een dagboek en schrijf buiten!",
    "🍎 Pluk fruit (seizoensgebonden activiteit)!",
    "🚗 Maak een roadtrip naar een plek waar je nog nooit bent geweest!",
    "🎶 Zet je favoriete muziek op en dans buiten!",
    "🏕️ Ga een nachtje kamperen, zelfs in je eigen tuin!",
    "🌧️ Dans in de regen en voel je weer even kind!",
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
