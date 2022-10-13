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
        if (this.isMoveForward === true) {
            this.snakeTail.splice(0, 0, '*')
            console.log(this.snakeTail);
            return this.snakeTail
        }
        else if (this.isMoveForward === false) {
            this.snakeTail.push('.')
            console.log(this.snakeTail);
            return this.snakeTail
        }

        return this.snakeTail
    }
}

let snake = new Snake
snake.moveForward()
snake.eat('.')
snake.moveBackward()
snake.eat('.')
snake.moveForward()
snake.eat('.')
snake.moveBackward()
snake.eat('.')
snake.moveForward()
snake.eat('.')
snake.moveBackward()
snake.eat('.')


