class Computer {
    constructor() {

        this.taskList = []
    }

    addTask(task) {

        this.taskList.push(task)
        return this.taskList
    }
    processTask() {
        if (this.taskList.length === 0) {
            console.log(`All tasks have been processed`);
            return;
        }
        this.taskList.shift()
        console.log(`${this.taskList.length} more left to process /
        Computer processing task: ${this.taskList} `
      );
        return this.taskList
    }
}


let computerProcessTasks1 = new Computer()
computerProcessTasks1.addTask('1.Open Chrome')
computerProcessTasks1.addTask('2.Open Youtube')
computerProcessTasks1.addTask('3.Start first song')
computerProcessTasks1.addTask('4.Start next song in the player list')
computerProcessTasks1.addTask('5.Stop music player')
computerProcessTasks1.addTask('6.Close Chrome windol')
computerProcessTasks1.processTask()
computerProcessTasks1.processTask()
computerProcessTasks1.processTask()
computerProcessTasks1.processTask()
computerProcessTasks1.processTask()
computerProcessTasks1.processTask()
computerProcessTasks1.processTask()





