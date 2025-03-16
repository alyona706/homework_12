function showList() {
    const parent = document.querySelector('.wrapper');

    const title = document.createElement('h2');
    title.textContent = 'TODO list';

    const ul = document.createElement('ul');
    ul.classList.add('list');

    const newTaskInput = document.createElement('input');
    newTaskInput.setAttribute('placeholder', 'Add new task');
    const addBtn = document.createElement('button');
    addBtn.classList.add('btn', 'add-btn');
    addBtn.textContent = 'Add';

    parent.appendChild(title);
    parent.appendChild(ul);
    parent.appendChild(newTaskInput);
    parent.appendChild(addBtn);

    addBtn.addEventListener('click', () => {
        const inputVal = newTaskInput.value;
        if(inputVal) {
            newTaskInput.value = '';
            addNewTask(ul, inputVal);
        }
    });
}

function addNewTask(parent, value) {
    const li = document.createElement('li');
    li.classList.add('list-item');

    const p = document.createElement('p');
    p.textContent = value;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'delete-btn');
    deleteBtn.textContent = 'Delete';

    parent.appendChild(li);
    li.appendChild(p);
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    parent.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('delete-btn')) {
            const curentLi = event.target.closest('.list-item');
            curentLi.remove();
        }
    });
}

showList();