document.querySelector('.btns_wrap').addEventListener('click', (event) => {
    let button = event.target;
    let newLinkBtn = document.querySelector('.open_link');
    let newLink = '';

    if(button.classList.contains('add_link')) {
        newLink = prompt('Add your link', '');
        if(newLink) {
            newLinkBtn.setAttribute('data-url', newLink);
            newLinkBtn.classList.remove('disabled');
        }
    }

    if (button.classList.contains('open_link') && button.hasAttribute('data-url')) {
        window.open(button.getAttribute('data-url'));
    }
});