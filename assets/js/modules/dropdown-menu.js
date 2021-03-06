import outsideClick from './outside-click.js';

export default function initDropdownMenu() {
    const subMenus = document.querySelectorAll('[data-dropdown]');
    const events = ['click', 'touchstart'];

    subMenus.forEach( menu => {
        events.forEach(eventCalled => {
            menu.addEventListener(eventCalled, handleClick);
        })
    })

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, events, () => {
            this.classList.remove('active');
        })
    }
}