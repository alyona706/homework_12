function addButtons() {
    const parent = document.querySelector('.btns_wrap');

    const btn1 = document.createElement('button');
    btn1.textContent= 'Button 1';

    const btn2 = document.createElement('button');
    btn2.textContent= 'Button 2';

    const btn3 = document.createElement('button');
    btn3.textContent= 'Button 3';

    parent.appendChild(btn1);
    parent.appendChild(btn2);
    parent.appendChild(btn3);

    parent.querySelectorAll('button').forEach(btn => {
        btn.classList.add('btn');
    });

    parent.addEventListener('click', (event) => {
        event.target.innerText ? alert(`Клікнуто на кнопці: ${event.target.innerText}`) : '';
    });
}

addButtons();