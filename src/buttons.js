import createMainPage from './createMainPage';
import createMenuPage from './menu';
import createContactPage from './contact';
import { navBar, dynamicDisplay } from './index';

export default function createButtons () {
    const clearDynamicDisplay = () => {
        dynamicDisplay.textContent = '';
    }
    const createButton = (container, text) => {
        const button = document.createElement('button');
        container.appendChild(button);
        button.classList.add('buttons');
        button.setAttribute('id', text);
        button.textContent = text;
        return button;
    }
    const createNavBar = () => {
        const homeButton = createButton(navBar, 'HOME');
        const menuButton = createButton(navBar, 'MENU');
        const contactButton = createButton(navBar, 'CONTACT');
        homeButton.addEventListener('click', () => {
            console.log('home');
            clearDynamicDisplay();
            createMainPage();
        })
        menuButton.addEventListener('click', () => {
            console.log('menu');
            clearDynamicDisplay();
            createMenuPage();
        })
        contactButton.addEventListener('click', () => {
            console.log('contact');
            clearDynamicDisplay();
            createContactPage();
        })
    };
    createNavBar();
};