import { ITask, ITodo } from '../../interfaces/ITodo'

class Todo implements ITodo {
  private Todo: Array<ITask> = []

  constructor() {
    this.Todo = []
  }

  add(_task: ITask): void {
    this.Todo.push(_task)
  }

  remove(_taks: ITask): boolean {
    // verify if the id exist
    const id = this.Todo.filter((task) => task.id === _taks.id)[0]

    // if exist do this
    if (id) {
      this.Todo = this.Todo.filter((task) => {
        return task.id !== _taks.id
      })
      console.log(`Removed task '${_taks.id}'`)
      return true
    } else {
      console.log(`Task '${_taks.id}' not found :c`)
      return false
    }
  }

  getLenght(): number {
    return this.Todo.length
  }
}

export default Todo
