// Adicione a classe ativo a todos os itens do menu
const links = document.querySelectorAll('.menu a')

links.forEach((link) => link.classList.add('ativo'))

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
links.forEach((link) => link.classList.remove('ativo'))

links[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')

imgs.forEach( (img) => {
  const hasAlt = img.hasAttribute('alt')

  console.log(hasAlt)
})

// Modifique o href do link externo no menu
const menu = document.querySelector('.menu')
const externalLink = menu.querySelector('[href^="https"]')

externalLink.setAttribute('href', 'https://www.google.com')

