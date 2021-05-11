export default function initAnimationScroll(){
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
        animationScroll();
         
        window.addEventListener('scroll', animationScroll);
    }
}