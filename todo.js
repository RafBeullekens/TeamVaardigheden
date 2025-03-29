// === To-Do List Logic ===

const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

// Load from localStorage
window.addEventListener("DOMContentLoaded", loadTasks);

addTaskBtn.addEventListener("click", addTask);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">✖</button>
  `;

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  todoList.appendChild(li);
  todoInput.value = "";
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll(".todo-item").forEach((item) => {
    tasks.push({
      text: item.querySelector("span").textContent,
      completed: item.classList.contains("completed"),
    });
  });
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
      <span>${task.text}</span>
      <button class="delete-btn">✖</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
      saveTasks();
    });

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });

    todoList.appendChild(li);
  });
}
