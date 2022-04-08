const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

let todos = [];

const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); 
}

function deleteTodo(event) {
    const deleteli = event.target.parentElement;
    deleteli.remove();
    const filterTodos =  todos.filter(todo => todo.id !== parseInt(deleteli.id));
    todos = filterTodos;
    saveTodos()
}

function printTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌"
    btn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function handleTodoFormSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    todos.push(newTodoObj);
    printTodo(newTodoObj);
    saveTodos();
};

todoForm.addEventListener("submit", handleTodoFormSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(printTodo);
}

