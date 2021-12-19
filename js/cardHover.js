function cardMouseEnter(event) {
    const footer = event.target.lastElementChild;
    footer.id = '';
}

function cardMouseLeave(event) {
    const footer = event.target.lastElementChild;
    footer.id = 'hidden';
}