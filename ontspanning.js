const apiUrl = 'https://meme-api.com/gimme';

const fetchRandomMeme = async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`http error with status: ${response.status}`);
        }
        const data = await response.json();
        return data.url
    } catch (error) {
        console.error("error fetching meme:", error);
    }
};

const renderRandomMeme = async () => {
    const url = await fetchRandomMeme();
    const img = document.createElement('img');
    img.src = url;
    const main = document.querySelector('main');
    main.appendChild(img);
}

const memeButton = document.getElementById('meme-button');
memeButton.addEventListener('click', () => {
    console.log("button clicked")
    const img = document.querySelector('main img');
    if (img) {
        const main = document.querySelector('main');
        main.removeChild(img);
    }
    renderRandomMeme();
})