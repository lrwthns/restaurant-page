import createMainPage from './createMainPage';

const populatePage = (() => {
    const content = document.querySelector('#content');
    const tabButtons = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    
    content.appendChild(tabButtons);
    tabButtons.appendChild(homeButton);
    tabButtons.appendChild(menuButton);
    tabButtons.appendChild(contactButton);
    
    tabButtons.classList.add('buttons-container');
    homeButton.classList.add('buttons');
    menuButton.classList.add('buttons');
    contactButton.classList.add('buttons');
    
    homeButton.textContent = 'HOME';
    menuButton.textContent = 'MENU';
    contactButton.textContent = 'CONTACT';

    homeButton.addEventListener('click', () => {
        console.log('home');
    })

    menuButton.addEventListener('click', () => {
        console.log('menu');
    })

    contactButton.addEventListener('click', () => {
        console.log('contact');
    })

})();


createMainPage();
