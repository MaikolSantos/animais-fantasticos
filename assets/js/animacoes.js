function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    const activeClass = 'ativo';

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);

        function classAtivo(index){
            tabContent.forEach(item => item.classList.remove(activeClass))
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add(activeClass, direcao);
        }

        tabMenu.forEach( (li, position) => {
            li.addEventListener('click', () => classAtivo(position))
        })
    }
} initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
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
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

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

function initAnimationScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]'); 
    if(sections.length) {
        function animationScroll() {
            const windowMetade = window.innerHeight * 0.6;

            sections.forEach( section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionShow = (sectionTop - windowMetade) < 0;
                if(sectionShow) return section.classList.add('ativo');
                section.classList.remove('ativo');
            })
        }
        window.addEventListener('scroll', animationScroll);
    }
    animationScroll() 
} initAnimationScroll();