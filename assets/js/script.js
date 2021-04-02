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

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function showAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        
        accordionList.forEach(item => item.addEventListener('click', showAccordion));
    }
} initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    if(linksInternos.length) {
        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }

        linksInternos.forEach( link => link.addEventListener('click', scrollToSection));
    }
} initScrollSuave();