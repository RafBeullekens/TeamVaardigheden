const input = document.querySelector('input');
const ul = document.querySelector('ul');
const addButton = document.getElementById('add');

const addTask = () => {
    const task = input.value;
    if (!task) {return;}
    const li = document.createElement('li');
    li.textContent = task;
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");
    li.appendChild(removeButton);
    ul.appendChild(li);
    input.value = "";
};

const removeTask = (event) => {
    if (event.target.classList.contains("remove")) {
        event.target.parentElement.remove();
    }
};

addButton.addEventListener('click', addTask);
ul.addEventListener("click", removeTask);