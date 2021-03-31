function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    const activeClass = 'ativo';

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);

        function classAtivo(index){
            tabContent.forEach(item => item.classList.remove(activeClass))
            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach( (li, position) => {
            li.addEventListener('click', () => classAtivo(position))
        })
    }
} initTabNav();

