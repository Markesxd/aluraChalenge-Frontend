
function save(){
    const titulo = document.querySelector('#titulo').value;
    const descricao = document.querySelector('#descricao').value;
    const language = document.querySelector('#linguagem').value.toLowerCase();
    const color = document.querySelector('.color-select').style.backgroundColor;
    const code = document.querySelector('#code').innerText;

    const card = `<div class='card'  onmouseenter="cardMouseEnter(event)" onmouseleave="cardMouseLeave(event)">
        <div class='editor' style='background:${color}'>
            <div class="code">
                <div class="code-header">
                    <span class="ball red"></span>
                    <span class="ball yellow"></span>
                    <span class="ball green"></span>
                </div>
                <code class='code-editor language-${language}' aria-label="Card de código">${code}</code>
            </div>
        </div>
        <h3>${titulo}</h3>
        <p>${descricao}</p>
        <div class='card-footer' id='hidden'>
                    <span>
                        <i class='fas fa-comment'></i><span>9</span>
                        <i class='fas fa-heart'></i><span>9</span>
                    </span>
                    <img src="./img/profile-pic.png" alt="autor">
                </div>
    </div>`

    const projects = document.querySelector('.projects');
    projects.innerHTML += card;
}
