// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img')
console.log(img.offsetTop)

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img')
let soma = 0;  
imgs.forEach(item => {
  soma += item.getBoundingClientRect().width;
})
console.log(soma)


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')

links.forEach(item => {
    console.log(item.offsetWidth >= 48 && item.offsetHeight >= 48)
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const smallBrowser = window.matchMedia('(max-width: 720px)').matches;

if(smallBrowser) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile');
}

