import Sortable from "../node_modules/sortablejs/modular/sortable.esm.js";
import { listItems } from "./modules/dynamic-list.js";
// import { teste } from "./modules/dynamic-list.js";

const list = [
	'Introdução',
	'Fundamentos',
	'Primeiro Projeto',
	'Segundo Projeto',
	'Intermediário',
	'Intermediário 2',
	'Intermediário 3',
	'Terceiro Projeto',
	'Quarto Projeto',
	'Avançado 1',
	'Avançado 2',
	'Avançado 3',
	'Avançado 4',
	'Avançado 5',
	'Quinto Projeto',
	'Sexto Projeto',
	'Expert 1',
	'Expert 2',
	'Expert 3',
	'Projeto Final',
];

document.getElementById("app").appendChild(listItems(list));


console.log(listItems());

// Simple list
const sortable = Sortable.create(simpleList, {
	onUpdate: function (_event) {
		updateList();
	},
 });


const updateItem = (element, index) => {
	const title = element.querySelector('.section-title');
	title.innerText = String(title.innerText).replace(/[0-9]{1,}\./, '');
	title.innerText = `${index + 1}. ${title.innerText}`;
}


const updateList = () => {
	sortable.el
		.querySelectorAll('#simpleList > .list-group-item')
		.forEach(updateItem);
}

updateList();



 
// Sortable.create(simpleList2, { /* options */ });
// Sortable.create(simpleList3, { /* options */ });