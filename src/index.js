import Sortable from "../node_modules/sortablejs/modular/sortable.esm.js";

// Simple list
const sortable = Sortable.create(simpleList, {
	onUpdate: function (event) {
        console.log('atualizado -> index: ', event.newIndex + 1);
		const title = event.item.querySelector('.section-title');
        console.log('element: ', title.innerText);
		title.innerText = String(title.innerText).replace(/[0-9]{1,}\./, '');
		title.innerText = `${event.newIndex + 1}. ${title.innerText}`;
	},
 });




const updateList = () => {
	sortable.el
		.querySelectorAll('#simpleList > .list-group-item')
		.forEach((element) => {
			console.log(element);
		});
}

updateList();


 
Sortable.create(simpleList2, { /* options */ });
Sortable.create(simpleList3, { /* options */ });