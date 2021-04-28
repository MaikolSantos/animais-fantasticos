// // Retorne a soma total de caracteres dos
// // parágrafos acima utilizando reduce
// const ps = document.querySelectorAll('p');

// const somaCaracters = Array.prototype.reduce.call(ps, (acumulador, item) => {
//   return acumulador + item.innerText.length
// }, 0)

// console.log(somaCaracters)


// // Crie uma função que retorne novos elementos
// // html, com os seguintes parâmetros
// // tag, classe e conteudo.

// function newElement(tag, classe, conteudo) {
//   const element = document.createElement(tag);
//   classe ? element.classList.add(classe) : null;
//   conteudo ? element.innerHTML += conteudo : null;
//   return element
// }

// console.log(newElement('h1', 'titulo', 'Hello World'))


// // Crie uma nova função utilizando a anterior como base
// // essa nova função deverá sempre criar h1 com a
// // classe titulo. Porém o parâmetro conteudo continuará dinâmico

// const criaH1 = newElement.bind(null, 'h1', 'titulo')

// console.log(criaH1('Novo Titulo'))

console.log(237 % 11)