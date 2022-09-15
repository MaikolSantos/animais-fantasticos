// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImg = document.querySelector("img");
// console.log(firstImg.offsetTop)

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll("img");

let widthImgs = 0;
imgs.forEach((img) => {
  widthImgs += img.offsetWidth;
});

// console.log(widthImgs)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a[href]");

links.forEach((link) => {
  const width = link.clientWidth;
  const height = link.clientHeight;
  if (width >= 48 && height >= 48) {
    // console.log(`O link ${link} está no recomendado`)
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const widthBrowser = window.innerWidth;
const menu = document.querySelector(".menu");

console.log(widthBrowser);

widthBrowser < 720
  ? menu.classList.add("menu-mobile")
  : menu.classList.remove("menu-mobile");
