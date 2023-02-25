const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const saveToDo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo-item");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerText = "Done"
    todo.appendChild(doneBtn);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerText = "Delete"
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
}

//EVENTS
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;

    if (inputValue) {
       saveToDo(inputValue);
    }
});

todoForm.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    if(targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }
});