export default function createMainPage () { 
    const content = document.querySelector('#content');
    const mainImage = document.createElement('div');
    const headline = document.createElement('div');
    const mainWords = document.createElement('div');
    content.appendChild(mainImage);
    content.appendChild(headline);
    content.appendChild(mainWords);
    mainImage.classList.add('main-image');
    headline.classList.add('headline');
    mainWords.classList.add('main-words');
    headline.textContent = `Nekno's`;
    mainWords.innerHTML = 'authentic sumatran cuisine' + '<br>' + 'family recipes since 1970';
}

