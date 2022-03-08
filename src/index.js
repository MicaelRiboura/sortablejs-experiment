import Sortable from "../node_modules/sortablejs/modular/sortable.esm.js";

// Simple list
Sortable.create(simpleList, {
    // Element is chosen 
    onChoose: function (evt) {
        console.log('escolhido');
	},
    // Element is unchosen
    onUnchoose: function(evt) {
        console.log('náo escolhido');
	},
    // Element dragging started
	onStart: function (evt) {
        console.log('começado');
	},

	// Element dragging ended
	onEnd: function (evt) {
        console.log('terminado');
	},

	// Element is dropped into the list from another list
	onAdd: function (evt) {
        console.log('adicionados');
	},

	// Changed sorting within list
	onUpdate: function (evt) {
        console.log('atualizado');
	},

	// Called by any change to the list (add / update / remove)
	onSort: function (evt) {
        console.log('sort');
	},
 });
 
Sortable.create(simpleList2, { /* options */ });
Sortable.create(simpleList3, { /* options */ });