// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ')
const maior = Math.max(...arrayNumeros)
console.log(maior)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function soma(lista){
  let soma = 0;
  lista.forEach( item => {
    const precosLimpos = +item.replace(/[ ]+/g, '').slice(2).replace(/[,]/g, '.');
    const numerosArredondados = +precosLimpos.toFixed(2)
    soma += numerosArredondados;
  })
  return soma;
}

console.log(soma(listaPrecos).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
