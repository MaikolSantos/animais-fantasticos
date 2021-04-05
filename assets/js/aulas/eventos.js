// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function sessaoAtiva(event) {
    event.preventDefault();
    linksInternos.forEach(item => item.classList.remove('ativo'))
    event.currentTarget.classList.add('ativo')
}

linksInternos.forEach(item => item.addEventListener('click', sessaoAtiva))


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');


function click(event) {
    event.preventDefault();
    console.log(event.currentTarget);
}

todosElementos.forEach(elemento => {
    elemento.addEventListener('click', click);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function remover(event) {
    event.preventDefault();
    event.target.remove();
}

todosElementos.forEach(elemento => {
    elemento.addEventListener('click', remover);
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function bigText(event) {
    if(event.key === 't'){
        document.documentElement.classList.toggle('big-text') //documentElement se refere a <html> assim como body se refere a <body>
    }
}

window.addEventListener('keydown', bigText);
