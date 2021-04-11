//AULA

// function Pessoa(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
// }

// Pessoa.prototype.andar = function() {
//     return `${this.nome} está andando`
// } // podemos adicionar métodos e atributos e acessar com os objetos criados (ex: const maikol abaixo)

// const maikol = new Pessoa('Maikol', 28);


// // console.log(Pessoa.prototype);
// // console.log(maikol.andar());

// const lista = document.querySelectorAll('li')

// // console.log(Array.prototype.slice.call(lista))
// // console.log(Array.from(lista))

// // [1, 2, 3].slice(); //existe
// // [1, 2, 3].from(); //não existe

// const Carro = {
//     marca: 'ford',
//     preco: 2000,
//     acelerar() {
//         return true
//     }
// }


//EXERCÍCIOS 


// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const maikol = new Pessoa('Maikol', 'Santos', 28)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

//RESPOSTA: utilize .prototype no console do navegador para fazer as listas. Por exemplo NodeList.prototype
//ou
// Object.getOwnPropertyNames(NodeList.prototype)
// Object.getOwnPropertyNames(HTMLCollection.prototype)
// Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //ERRO

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String, pois quero saber de li.hidden.constructor.name e não de li.hidden

