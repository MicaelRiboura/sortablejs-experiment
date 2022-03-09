const itemElement = (section = '') => {
    const content =  `
        <div class="m-0 breadcrumb bg-secondary border-bottom d-flex justify-content-between">
            <h6 class="text-light section-title">${section}</h6>
            <div class="d-flex align-items-center">
                <button class="d-flex align-items-center btn btn-warning mr-3" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" style="width: 16px;" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Editar
                </button>
                <button class="d-flex align-items-center btn btn-outline-light" type="button" data-toggle="collapse"
                    data-target="#item-${section}" aria-expanded="false" aria-controls="item-${section}">
                    Unidades
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="14" height="14" fill="currentColor"
                        class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path
                            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="collapse" id="item-${section}">
            <div class="card card-body">
                <h6>Descrição</h6>
                <h6>Unidades</h6>
                <div id="simpleList2" class="list-group">
                    <div class="list-group-item">Unidade 1 <a href="http://rubaxa.github.io/Sortable/">Sortable</a></div>
                    <div class="list-group-item">Unidade 2</div>
                    <div class="list-group-item">Unidade 3</div>
                    <div class="list-group-item">Unidade 4</div>
                    <div class="list-group-item">Unidade 5</div>
                </div>
            </div>
        </div>
    `;

    const item = document.createElement('div');
    item.classList.add('list-group-item');
    item.innerHTML = content;
    return item;
}

export { itemElement };