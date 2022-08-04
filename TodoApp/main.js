
const todoArr = [];
class Todo {

    constructor(todo) {
        this.todo = todo
        this.isDone = false;
        this.id = (this.constructor.counter || 0) + 1;

    }


}

const addTodo = () => {

    var inputValue = document.getElementById('inputValue');
    var inputValue = inputValue.value;
    var todo = new Todo(inputValue);
    if (inputValue === "") {
        console.log('ad');
    } else {
        todoArr.push(todo)
        document.getElementById("displayTodos").innerHTML += `<span id="comp"><li  idx="${todoArr.length - 1}"id="todos">${todo.todo}</span> 
        <button type="button"id="deleteTodo" onclick="deleteTodo()">Delete</button><button type="button"id="completeTodo" onclick="completeTodo()">Done</button></li>`
    }

}

const deleteTodo = () => {
    const btn = event.target;
    const index = parseInt(btn.parentElement.getAttribute("idx"));
    todoArr.splice(index, 1);
    document.getElementById("displayTodos").innerHTML = todoArr.map((todo, i) => {
        return `<span><li idx="${i}">${todo.todo} </span id="comp"><button id="deleteTodo"type="button" onclick="deleteTodo()">Delete</button><button id="completeTodo"type="button" onclick="completeTodo()">Done</button></li>`
    });


}


const completeTodo = () => {

    document.getElementById("displayTodos").innerHTML = todoArr.map((todo, i) => {
        return `<span id="comp" ><li idx="${i}">${todo.todo}</span> <button id="deleteTodo"type="button" onclick="deleteTodo()">Delete</button><button id="completeTodo"type="button" onclick="completeTodo()">Done</button></li>`
    });

    todoArr.isDone = !todoArr.isDone

    if (todoArr.isDone === false) {
          document.getElementById("comp").style.textDecoration = 'line-through'
          todoArr.isDone!=todoArr.isDone
         } if (todoArr.isDone === true) {
             document.getElementById("comp").style.textDecoration = 'none'
        }
    console.log(todoArr.isDone);

}

document.getElementById('addTodos').addEventListener("click", addTodo);

// todoArr.isDone = !todoArr.isDone
// if (element === false) {
//     document.getElementById("displayTodos").style.textDecoration = 'line-through'
//     element!=element
// } if (element === true) {
//     document.getElementById("displayTodos").style.textDecoration = 'none'
// }
// console.log(todoArr.isDone);










document.getElementById('addTodos').addEventListener("click", addTodo);


