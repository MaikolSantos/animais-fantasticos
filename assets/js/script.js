// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');

function setActive(event) {
  event.preventDefault()
  links.forEach( (link) => {
    link.classList.remove('active')
  })
  event.target.classList.add('active')
}

links.forEach((link) => {
  link.addEventListener('click', setActive)
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// const allElements = document.querySelectorAll('body *')

// function showElement(event) {
//   console.log(event.currentTarget)
// }

// allElements.forEach( (element) => {
//   element.addEventListener('click', showElement)
// })

const body = document.querySelector('body')

// function showElement(event) {
//   console.log(event.target)
// }

body.addEventListener('click', showElement)

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function showElement(event) {
  // event.target.remove()
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const ps = body.querySelectorAll('p')

body.addEventListener('keydown', sizeText)

function sizeText(event) {
  if(event.key === 't') {
    ps.forEach( (p) => {
      if(!p.style.fontSize) {
        p.style.fontSize = '16px'
      }
      let currentSize = +p.style.fontSize.replace('px', '')
      currentSize += 2
      p.style.fontSize = `${currentSize}px`

    })
  }
}
