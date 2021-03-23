import { dynamicDisplay } from './index';

export default function createMainPage () { 
    const createElement = (container, classname) => {
        const element = document.createElement('div');
        container.appendChild(element);
        element.classList.add(classname);
        return element;
    }
    const headline = createElement(dynamicDisplay, 'headline')
    const mainWords = createElement(dynamicDisplay, 'main-words')
    headline.textContent = `Nekno's`;
    mainWords.innerHTML = 'authentic sumatran cuisine' + '<br>' + 'family recipes since 1970';
}

