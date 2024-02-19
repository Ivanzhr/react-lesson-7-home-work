function CreatePagination() {
    return (
    <div class="pagination__items">
        <button class="btn btn--gray pagination__item pagination__item--prev">&laquo;</button>
        <button class="btn btn--violet pagination__item">1</button>
        <button class="btn btn--gray pagination__item">2</button>
        <button class="btn btn--gray pagination__item">3</button>
        <button class="btn btn--gray pagination__item">4</button>
        <button class="btn btn--gray pagination__item pagination__item--all">...</button>
        <button class="btn btn--gray pagination__item">40</button>
        <button class="btn btn--gray pagination__item pagination__item--next">&raquo;</button>
    </div>
    )
}

export default CreatePagination