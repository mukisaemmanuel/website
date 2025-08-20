const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const clearTodosBtn = document.getElementById('clear-todos');


const myTodoList = todoManager();
function todoManager() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
    window.addEventListener('beforeunload', saveTodos);
    return {
        addTodo: function(text) {
            todos.push({ text: text, completed: false });
        },
        removeTodo: function(index) {
            todos.splice(index, 1);
        },
        toggleComplete: function(index) {
            todos[index].completed = !todos[index].completed;
        },
        clearTodos: function() {
            todos = [];
        },
        getTodos: function() {
            return todos;
        }
    };
}
function renderTodoList() {
    todoList.innerHTML = '';
    myTodoList.getTodos().forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span class="todo-text">${todo.text}</span>
            <div class="todo-actions">
                <button class="todo-btn complete-btn">✔️</button>
                <button class="todo-btn delete-btn">🗑️</button>
            </div>
        `;
        todoList.appendChild(todoItem);
    });
}
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
        myTodoList.addTodo(text);
        todoInput.value = '';
        renderTodoList();
    }
});

todoList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const index = Array.from(todoList.children).indexOf(e.target.closest('li'));
        myTodoList.removeTodo(index);
        renderTodoList();
    } else if (e.target.classList.contains('complete-btn')) {
        const index = Array.from(todoList.children).indexOf(e.target.closest('li'));
        myTodoList.toggleComplete(index);
        renderTodoList();
    }
});

clearTodosBtn.addEventListener('click', function() {
    myTodoList.clearTodos();
    renderTodoList();
});

renderTodoList();