function Dom(seletor) {
    this.element = () => {
        return document.querySelector(seletor)
    }
    this.active = () => this.element().classList.add('ativar')
}

const li = new Dom('li');
li.element()
li.active()