import Sortable from "../node_modules/sortablejs/modular/sortable.esm.js";

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


 
Sortable.create(simpleList2, { /* options */ });
Sortable.create(simpleList3, { /* options */ });