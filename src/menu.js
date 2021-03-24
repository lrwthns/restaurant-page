import { dynamicDisplay } from './index';

export default function createMenuPage () {
    const menu = document.createElement('div');
    const createMenu = (name, desc, container) => {
        const menuElement = document.createElement('div');
        const menuName = document.createElement('div');
        const menuDesc = document.createElement('div');
        menuElement.classList.add('menus');
        menuDesc.classList.add('menu-descs');
        menuName.textContent = name;
        menuDesc.textContent = desc;
        container.appendChild(menuElement);
        menuElement.appendChild(menuName);
        menuElement.appendChild(menuDesc);
        return menuElement;
    }
    menu.classList.add('menu-container');
    dynamicDisplay.appendChild(menu);
    const menuOne = createMenu('Dendeng Balado', 'Sumatran spicy beef jerky - 500g - 25$', menu);
    const menuTwo = createMenu('Pempek Panggang', 'Grilled fishcakes with shrimp paste filling - 20$', menu);
    const menuThree = createMenu('Kolak Pisang', 'Banana and coconut milk dessert - 13$', menu);
}