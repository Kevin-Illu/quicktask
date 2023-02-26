import { ITask, ITodo } from '../../interfaces/ITodo'

class Todo implements ITodo {
  public todos: ITask[]
  public title: string

  constructor() {
    this.todos = [
      { id: 1, name: 'hacer oficio' },
      { id: 2, name: 'llenar los botes de agua' },
      { id: 3, name: 'seguir con la app' },
    ]
    this.title = 'TaskManagement'
  }

  public add = (_task: ITask): void => {
    this.todos.push(_task)
  }

  public remove = (id: number): boolean => {
    try {
      this.todos = this.todos.filter((task) => task.id !== id)
      console.log(`Removed task '${id}'`)
      return true
    } catch (error) {
      console.log(`Task '${id}' not found :c`)
      return false
    }
  }

  public getLenght = (): number => {
    return this.todos.length
  }

  public getTodoById = (id: number) => {
    const result = this.todos.filter((todo) => todo.id === id)
    console.log(result)
    return result
  }
}

export default Todo
