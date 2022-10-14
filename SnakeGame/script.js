class Snake {
    constructor() {
        this.snakeTail = []
        this.isMoveForward = true;
        this.dot = '.'
    }

    moveForward() {
        this.isMoveForward = true

    }
    moveBackward() {
        this.isMoveForward = false
    }
    eat() {
        if (this.isMoveForward) {
            this.snakeTail.splice(0, 0, 0)
            console.log(this.snakeTail);
            return this.snakeTail
        }
        else  {
            this.snakeTail.push(1)
            console.log(this.snakeTail);
            return this.snakeTail
        }

       
    }
}

let snake = new Snake
snake.moveForward()
snake.eat('.')
snake.moveBackward()
snake.eat('.')
//snake.moveForward()
 snake.eat('.')
 snake.eat('.')
 snake.eat('.')
 snake.moveForward()
 snake.eat('.')
 snake.eat('.')
 snake.eat('.')
// snake.moveBackward()
// snake.eat('.')
// snake.moveForward()
// snake.eat('.')
// snake.moveBackward()
// snake.eat('.')


