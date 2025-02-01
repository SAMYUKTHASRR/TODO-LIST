function addTask() {
    let input = document.getElementById("todoInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let todoList = document.getElementById("todoList");
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo");
    
    todoItem.innerHTML = `
        <input type="checkbox" onclick="toggleTask(this)">
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">DELETE</button>
    `;
    
    todoList.appendChild(todoItem);
    input.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}

function toggleTask(checkbox) {
    let taskText = checkbox.nextElementSibling;
    taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
}
