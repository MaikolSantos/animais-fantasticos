export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');

    if(tooltips) {
        tooltips.forEach( item => item.addEventListener('mouseover', onMouseOver));

        function onMouseOver(event) {
            const tooltipBox = criarTooltip(this); // o this está fazendo referência ao item que tá sendo adicionado o evento (ali no forEach)
            
            onMouseMove.tooltipBox = tooltipBox;
            this.addEventListener('mousemove', onMouseMove);

            onMouseLeave.tooltipBox = tooltipBox;
            onMouseLeave.element = this;
            this.addEventListener('mouseleave', onMouseLeave);
        }

        const onMouseLeave = {
            handleEvent() {
                this.tooltipBox.remove();
                this.element.removeEventListener('mouseleave', onMouseLeave);
                this.element.removeEventListener('mousemove', onMouseMove);
            }
        }

        const onMouseMove = {
            handleEvent(event) {
                this.tooltipBox.style.top = event.pageY + 20 + 'px';
                this.tooltipBox.style.left = event.pageX + 20 + 'px';
            }
        }

        function criarTooltip(element) {
            const tooltip = document.createElement('div');
            const text = element.getAttribute('aria-label')
            tooltip.classList.add('tooltip');
            tooltip.innerText = text;
            document.body.appendChild(tooltip);
            return tooltip
        }
    }
}