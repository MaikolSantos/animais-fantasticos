// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu li');
menu.forEach((el) => el.classList.add('ativo'))

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((el, index) => {
    if(index !== 0) el.classList.remove('ativo')
})

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')
imgs.forEach(img => console.log(img.hasAttribute('alt')));

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('[href^="https://"]')

linkExterno.setAttribute('href', '#contato')



