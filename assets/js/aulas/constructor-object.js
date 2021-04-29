// Crie uma função que verifique
// corretamente o tipo de dado
function verificaTipoDado(dado) {
    return Object.prototype.toString.call(dado)
}

console.log(verificaTipoDado({}))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}

Object.defineProperties(quadrado, {
    lado: {
        value: 4,
        enumerable: true,
    } //lembrando que as propriedades enumerable, writable e configurable, por padrão, são false
})

Object.freeze(quadrado)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}
Object.freeze(configuracao)
  
  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array

Object.getOwnPropertyNames(String.prototype) //.prototype pq queremos dos protótipos
Object.getOwnPropertyNames(Array.prototype) //.prototype pq queremos dos protótipos