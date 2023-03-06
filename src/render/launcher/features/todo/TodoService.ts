import TodoApp from './TodoApp.js'

type ICommand =
  | '[GET] todos'
  | '[ADD] todo'
  | '[UPDATE] todo'
  | '[DELETE] todo by id'
  | '[GET] lenght'

class TodoService {
  private todo: TodoApp

  constructor(app: TodoApp) {
    this.todo = app
  }

  public executeCommand(command: ICommand, args: any) {
    switch (command) {
      case '[ADD] todo':
        this.todo.addTodo(args)
        break
      case '[GET] todos':
        return this.todo.getTodos()
      case '[UPDATE] todo':
        this.todo.updateTodo(args)
        break
      case '[DELETE] todo by id':
        this.todo.deleteTodo(args)
        break
      case '[GET] lenght':
        return this.todo.getLenghtTodos()
      default:
        throw new Error(`the command not exist ${command}`)
    }
  }
}

export default TodoService
