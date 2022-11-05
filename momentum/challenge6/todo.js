const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const ul = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let todos = [];

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const paintTodo = (todo) => {
  const li = document.createElement("li");
  li.style.color = " rgb(250, 248, 227)";
  li.style.fontWeight = "bold";
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", (event) => {
    console.dir(event.target.parentElement);
    console.log(event.target);
  });
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
};

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const toDo = todoInput.value;
  todoInput.value = "";
  todoObj = {
    text: toDo,
    id: Date.now(),
  };
  todos.push(todoObj);
  paintTodo(todoObj);
  saveTodos();
});

const todoList = localStorage.getItem(TODOS_KEY);
console.log(todoList);
console.log(typeof todoList);

if (todoList) {
  const parseedTodo = JSON.parse(todoList);
  console.log(parseedTodo);
  todos = parseedTodo;
  parseedTodo.forEach(paintTodo);
}
