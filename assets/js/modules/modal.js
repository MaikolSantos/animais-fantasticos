export default function initModal() {
    const containerModal = document.querySelector('[data-modal="container"]');
    const fecharModal = document.querySelector('[data-modal="fechar"]');
    const abrirModal = document.querySelector('[data-modal="abrir"]');

    if(containerModal && fecharModal && abrirModal) {
        function modalToggle(event) {
            event.preventDefault()
            containerModal.classList.toggle('ativo');
        }

        function clickForaModal(event) {
            if (event.target === this) modalToggle(event);
        }

        abrirModal.addEventListener('click', modalToggle);
        fecharModal.addEventListener('click', modalToggle);
        containerModal.addEventListener('click', clickForaModal);
    }   
}