const todoText = document.getElementById("inputField");
const todoButton = document.getElementById("addBtn");
const todoList = document.getElementById("list");

todoButton.addEventListener('click', () => {
    let newItem = document.createElement('li');
    newItem.className = 'todo-list__item';
    newItem.textContent = todoText.value;

    todoList.appendChild(newItem);
    todoText.value = '';
});