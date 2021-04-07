//Aula

function Dom (seletor) {
    this.element = document.querySelector(seletor);
    this.active = (classe) => this.element.classList.add(classe);
}

const li = new Dom('li');
console.log(li.element)
li.active('outra-classe');

//Exercícios

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = `${idade} anos`;
    this.andar = () => {
      console.log(this.nome + ' andou');
    }
  }
  
//   // Crie 3 pessoas, João - 20 anos,
//   // Maria - 25 anos, Bruno - 15 anos
const p1 = new Pessoa('João', 20);
const p2 = new Pessoa('Maria', 25);
const p3 = new Pessoa('Bruno', 15);
console.log(p1, p2, p3)
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  function Dom(seletor) {
      this.elements =  document.querySelectorAll(seletor);
      this.addClass = (classe) => {
          this.elements.forEach((element) => {
            element.classList.add(classe)
          })
      } 
      this.removeClass = (classe) => {
        this.elements.forEach((element) => {
            element.classList.remove(classe);
        })
      }
  }

  const imgs = new Dom('img');
  imgs.addClass('show');
  imgs.removeClass('show');
