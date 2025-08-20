function todoManager(){
    let todos = [];

    function addTodo(task){
        todos.push({ task, completed: false });
        console.log(`Added todo: "${task}"`);
    }

    function removeTodo(index){
        if(index >= 0 && index < todos.length){
            const removed = todos.splice(index, 1);
            console.log(`Removed todo: "${removed[0].task}"`);
        }else{
            console.log("Invalid todo index.");
        }
    }

    function listTodos(){
        console.log("Current todos:");
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. [${todo.completed ? "x" : " "}] ${todo.task}`);
        });
    }

    function markCompleted(index){
        if(index >= 0 && index < todos.length){
            todos[index].completed = true;
            console.log(`Marked todo as completed: "${todos[index].task}"`);
        }else{
            console.log("Invalid todo index.");
        }
    }

    return {
        addTodo,
        removeTodo,
        listTodos,
        markCompleted
    };
}

const myTodoList = todoManager();

myTodoList.addTodo("Learn JavaScript");
myTodoList.addTodo("Build a project");
myTodoList.addTodo({ task: "read a book", completed: false });
myTodoList.listTodos();
myTodoList.markCompleted(0);
myTodoList.removeTodo(1);
myTodoList.listTodos();

