export default function createMenuPage () {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');

    const createMenu = (name, desc, container) => {
        const menuElement = document.createElement('div');
        const menuName = document.createElement('h1');
        const menuDesc = document.createElement('h4');
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

    content.appendChild(menu);
  
    const menuOne = createMenu('Dendeng Balado', 'Sumatran spicy beef jerky', menu);
    const menuTwo = createMenu('Pempek Panggang', 'Grilled fishcake with ebi filling', menu);
    const menuThree = createMenu('Kolak Pisang', 'Banana and coconut milk dessert', menu);


}