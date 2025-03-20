const apiUrl = 'https://meme-api.com/gimme';
let memeCoins = 10;

const fetchRandomMeme = async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`http error with status: ${response.status}`);
        }
        const data = await response.json();
        return data.url;
    } catch (error) {
        console.error("error fetching meme:", error);
    }
}

const renderRandomMeme = async () => {
    const url = await fetchRandomMeme();
    const img = document.createElement('img');
    img.src = url;
    const main = document.querySelector('main');
    main.appendChild(img);
}

const displayMemeCoins = () => {
    const p = document.getElementById('meme-coins');
    p.innerHTML = `Meme Coins: ${memeCoins}`;
}

const memeButton = document.getElementById('meme-button');
memeButton.addEventListener('click', () => {
    const main = document.querySelector('main');
    const img = document.querySelector('main img');
    const oldP = document.getElementById('no-meme-coins');
    
    if (img) {main.removeChild(img);} 
    if (oldP) {main.removeChild(oldP);}
    
    if (memeCoins > 0) {
        renderRandomMeme();
        memeCoins -= 1;
        displayMemeCoins();
    } else {
        const newP = document.createElement('p');
        newP.innerHTML = "Je hebt geen Meme Coins meer :( !! Wacht tot de timer is afgelopen.";
        newP.id = "no-meme-coins";
        main.appendChild(newP);
    }
})

displayMemeCoins();