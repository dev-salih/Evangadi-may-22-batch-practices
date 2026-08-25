// 1. SELECT DOM ELEMENTS
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const filterButtons = document.getElementById("filter-buttons");

// 2. STATE INTERACTION (LOAD FROM LOCAL STORAGE)
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 3. RENDER THE DOM INTERFACE
function renderTodos(filter = "all") {
  // Clear out current DOM contents to avoid duplicates
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    // Evaluate active filter criteria
    if (filter === "active" && todo.completed) return;
    if (filter === "completed" && !todo.completed) return;

    // Create the structural list wrapper element
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = todo.id; // Embed state directly on the node

    // Create the task text child element
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.text;
    if (todo.completed) textSpan.classList.add("completed");

    // Create functional control buttons
    const completeBtn = document.createElement("button");
    completeBtn.textContent = todo.completed ? "Undo" : "Complete";
    completeBtn.className = "complete-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Assemble the subcomponents and inject them into the DOM layout
    li.appendChild(textSpan);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// 4. UTILITY STATE MANIPULATION
function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// 5. EVENT HANDLING: SUBMITTING FORMS
todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop standard browser form submission reloads

  const taskText = todoInput.value.trim();
  if (!taskText) return;

  const newTodo = {
    id: Date.now().toString(), // Generate predictable unique keys
    text: taskText,
    completed: false,
  };

  todos.push(newTodo);
  saveAndRender();
  todoInput.value = ""; // Flush input field cache memory
});

// 6. EVENT HANDLING: GENERAL EVENT DELEGATION
todoList.addEventListener("click", (e) => {
  // Intercept clicks at the root container level to locate targeted target buttons
  const targetElement = e.target;
  const parentLi = targetElement.parentElement;
  if (!parentLi) return;

  const targetId = parentLi.dataset.id;

  // Route structural logic branches contextually
  if (targetElement.classList.contains("delete-btn")) {
    todos = todos.filter((todo) => todo.id !== targetId);
    saveAndRender();
  }

  if (targetElement.classList.contains("complete-btn")) {
    const todo = todos.find((todo) => todo.id === targetId);
    if (todo) todo.completed = !todo.completed;
    saveAndRender();
  }
});

// 7. EVENT HANDLING: CLASS INTERACTION LABELS
filterButtons.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter;
  if (filter) {
    renderTodos(filter);
  }
});

// INITIAL LOAD RUN
renderTodos();
