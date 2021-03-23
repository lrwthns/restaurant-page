import createMainPage from './createMainPage';
import createButtons from './buttons';

const content = document.querySelector('#content');
const navBar = document.createElement('div');
const dynamicDisplay = document.createElement('div');

export {
    navBar,
    dynamicDisplay
}

const populatePage = (() => {
    dynamicDisplay.classList.add('dynamic-display');
    navBar.classList.add('buttons-container');
    content.appendChild(navBar);
    content.appendChild(dynamicDisplay);
    createButtons();
    createMainPage();
})();




