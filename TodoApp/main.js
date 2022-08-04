const todoArr = [];
class Todo {

    constructor(todo) {
        this.todo = todo
        this.isDone = false;
        this.constructor.counter = (this.constructor.counter || 0) + 1;
        this.id = this.constructor.counter;
    }
}

const addTodo = () => {
    var inputValue = document.getElementById('inputValue');
    var inputValue = inputValue.value;

    if (inputValue === "") {
        console.log('ad');
    } else {
        var todo = new Todo(inputValue);
        todoArr.push(todo);
        displayTodos();
    }
}

const deleteTodo = () => {

    const btn = event.target;
    const index = parseInt(btn.parentElement.getAttribute("idx"));
    todoArr.splice(index - 1, 1);

    displayTodos();
}


const completeTodo = () => {

    const btn = event.target;
    const index = parseInt(btn.parentElement.getAttribute("idx"));
    var selectedTodo = todoArr[index - 1];
    selectedTodo.isDone = !selectedTodo.isDone;

    displayTodos();
}

document.getElementById('addTodos').addEventListener("click", addTodo);


function displayTodos() {
    document.getElementById("displayTodos").innerHTML = todoArr.map((todo, i) => {
        if (todo.isDone) {
            return ` <li style="text-decoration: line-through" id="comp" idx="${todo.id}">${todo.todo}</div> <button id="deleteTodo"type="button" onclick="deleteTodo()">Delete</button>
            <button id="completeTodo"type="button" onclick="completeTodo()">Undone</button></li>`;
        } else {
            return `<li id="comp" idx="${todo.id}">${todo.todo}</div> <button id="deleteTodo"type="button" onclick="deleteTodo()">Delete</button>
            <button id="completeTodo"type="button" onclick="completeTodo()">Done</button></li>`;
        }
    });
}
