const codeEditor = document.querySelector('.code-editor');
codeEditor.focus();

function putHighlight(){
    const language = document.querySelector('#linguagem').value.toLowerCase();
    codeEditor.className = `code-editor hljs language-${language}`;
    hljs.highlightElement(codeEditor);
}

function codeFocus(){
    codeEditor.focus();
}