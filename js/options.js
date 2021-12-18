function flick(){
    const selection = document.querySelector('.color-selection');
    if(selection.id === 'hidden') {
        selection.id = ''
    } else {
        selection.id = 'hidden'
    }
}

function pickColor(event){
    const color = event.target.className;
    const codeEditor = document.querySelector('.editor');
    codeEditor.style.background = color;
    event.target.parentElement.parentElement.style.background = color;
}