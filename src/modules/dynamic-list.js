import { itemElement } from "./dynamic-item.js";


const listItems = (list = []) => {
    const listElement = document.createElement('div');
    listElement.classList.add('list-group');
    listElement.setAttribute('id', 'simpleList');
    
    console.log(itemElement());
    

    list.forEach((item) => {
        console.log('bla');
        listElement.appendChild(itemElement(item));
    });

    return listElement;

}

export { listItems };