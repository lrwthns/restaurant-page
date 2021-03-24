import { dynamicDisplay } from './index';

export default function createContactPage () {
    const makeElement = (container, idName, text = '') => {
        const element = document.createElement('div');
        container.appendChild(element);
        element.setAttribute('id', idName);
        element.innerHTML = text;
        return element;
    }
    const contactInfo = makeElement(dynamicDisplay, 'contact');
    const address = makeElement(contactInfo, 'address', 'Baarsjesweg 260, 1698 AA Amsterdam, Netherlands');
    const operationHours = makeElement(contactInfo, 'operation-hours', 'Open Tuesday-Sunday, 3-10 p.m.' + '<br>' + 'Dine-in, Takeout & Delivery');
    const phoneNumber = makeElement(contactInfo, 'phone', '+31 23 813 0034');
    const emailAddress = makeElement(contactInfo, 'email', 'info@neknosamsterdam.com');
    const endInfo = makeElement(contactInfo, 'end-info', 'Catering available, inquire now!');
}