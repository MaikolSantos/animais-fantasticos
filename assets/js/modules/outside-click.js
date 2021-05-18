export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';
    
    if(!element.hasAttribute(outside)) {
        events.forEach(eventCalled => {
            html.addEventListener(eventCalled, handleOutsideClick);
        })
        element.setAttribute(outside, '');
    }

    function handleOutsideClick(event) {
        if(!element.contains(event.target)) { // o elemento clicado contém (onde foi clicado)
            element.removeAttribute(outside);
            events.forEach(eventCalled => {
                html.removeEventListener(eventCalled, handleOutsideClick);
            })
            callback();
        }
        
    }
}