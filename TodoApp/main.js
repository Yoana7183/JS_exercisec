// const domElements = {
//     inputValue : document.getElementById('inputValue'),
//     addButton : document.getElementById('addTodos'),
//     clearButton: document.getElementById('removeTodos')
// }
const todoArr = [];
class Todo {

    constructor(todo) {
        this.todo = todo
        this.isDone = false;
        this.constructor.counter = (this.constructor.counter || 0) + 1;
        this._id = this.constructor.counter;

    }

}


const addTodo = ()=> {

    var inputValue = document.getElementById('inputValue');
    var inputValue = inputValue.value;
    var todo = new Todo(inputValue);
    if(inputValue===""){
        console.log('ad');
    }else {todoArr.push(todo)
        document.getElementById("displayTodos").innerHTML += `<li idx="${todoArr.length-1}">${todo.todo} 
        <button type="button" onclick="deleteTodo()">Delete</button></li><button type="button" onclick="checkTodo()">Done</button></li>`
    }

 
}


    const deleteTodo = () => {
        const btn = event.target;
        const index = parseInt(btn.parentElement.getAttribute("idx"));
        todoArr.splice(index, 1);
        document.getElementById("displayTodos").innerHTML = todoArr.map((todo, i) => {
          return `<li idx="${i}">${todo.todo} <button type="button" onclick="deleteTodo()">Delete</button></li>`
        });
      }



document.getElementById('addTodos').addEventListener("click", addTodo);

