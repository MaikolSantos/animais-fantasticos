// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let taxas = 0;
  let recebimentos = 0;
  transacoes.forEach( item => {
      let conta = Number(item.valor.slice(3))
      if (item.descricao.split(' ')[0].toLowerCase() === 'taxa'){
        taxas += conta;
      } else {
        recebimentos += conta;
      }
  })
  console.log(taxas);
  console.log(recebimentos);
  
// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTrasnportes = transportes.split(';');
console.log(arrayTrasnportes)
  
// Substitua todos os span's por a's
const html = `<ul>
  <li><span>Sobre</span></li>
  <li><span>Produtos</span></li>
  <li><span>Contato</span></li>
</ul>`;
console.log(html.replace(/['span']+/g, 'a')) //com regular expression
console.log(html.split('span').join('a')) //sem regular expression
  
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let cont = 0
transacoes2.forEach( item => {
    if (item.trim().toLowerCase().slice(0, 4) === 'taxa') cont++ 
})
console.log(cont)