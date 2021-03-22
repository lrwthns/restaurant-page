import createMainPage from './createMainPage';
import createMenuPage from './menu';
import createContactPage from './contact';

const populatePage = (() => {
    const content = document.querySelector('#content');
    
    const resetElement = (element) => {
        element.textContent = '';
    }

    const createButtons = (container, text) => {
        const button = document.createElement('button');
        container.appendChild(button);
        button.classList.add('buttons');
        button.textContent = text;
        return button;
    }

    const tabButtons = document.createElement('div');
    content.appendChild(tabButtons);
    tabButtons.classList.add('buttons-container');
    const homeButton = createButtons(tabButtons, 'HOME');
    const menuButton = createButtons(tabButtons, 'MENU');
    const contactButton = createButtons(tabButtons, 'CONTACT');
    
    homeButton.addEventListener('click', () => {
        console.log('home');
        resetElement(content);
        return createMainPage();
    })

    menuButton.addEventListener('click', () => {
        console.log('menu');
        resetElement(content);
        return createMenuPage();
    })

    contactButton.addEventListener('click', () => {
        console.log('contact');
    })

})();

createMainPage();


