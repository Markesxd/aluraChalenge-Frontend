function setActive(event){
    const options = document.querySelector('.menu').children;
    const keys = Object.keys(options);
    keys.forEach(i => {
        if(options[i].nodeName === 'H4') {}else{
            options[i].className = 'menu-option menu-unactive';
        }
    })
    const focus = event.target;
    let page;
    if(focus.className === 'menu-option menu-unactive'){
        focus.classList.remove('menu-unactive');
        page = focus.lastElementChild.innerText;
    } else if(focus.nodeName === 'I') {
        focus.parentElement.parentElement.classList.remove('menu-unactive');
        page = focus.parentElement.parentElement.lastElementChild.innerText;
    } else {
        focus.parentElement.classList.remove('menu-unactive');
        page = focus.parentElement.lastElementChild.innerText;
    } 
    switchPage(page);
}

function switchPage(page){
    const projects = document.querySelector('.projects');
    const editor = document.querySelector('.editor-area');
    const options = document.querySelector('.options');

    switch(page){
        case 'Editor de código': 
        editor.id = '';
        options.id = '';
        projects.id = 'hidden';
        break;
        case 'Comunidade':
            editor.id = 'hidden';
            options.id = 'hidden';
            projects.id = '';
            const cards = projects.children;
            const cardId = Object.keys(cards);
            cardId.forEach( id => {
                hljs.highlightElement(cards[id].firstElementChild.firstElementChild);
            })
        break;
    }
}