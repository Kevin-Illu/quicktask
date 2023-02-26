import { IService, TodoServiceCommand } from '../interfaces/IService'
import { ITodo } from '../interfaces/ITodo'
class TodoService implements IService {
  private Todo: ITodo

  constructor(Todo: ITodo) {
    this.Todo = Todo
  }

  executeCommand(command: TodoServiceCommand, args?: any): any {
    switch (command) {
      case '[ADD] new todo':
        this.Todo.add(args)
        console.log(`the ${args.name} was added`)
        break

      case '[DELETE] todo by id':
        if (this.Todo.remove(args)) {
          console.log(`the ${args} was delited`)
          return
        }
        console.log('not removed')
        break

      case '[GET] lenght todos':
        return this.Todo.getLenght()

      case '[GET] title app':
        return this.Todo.title

      case '[GET] todo by id':
        return this.Todo.getTodoById(args)
      case '[GET] todos':
        return this.Todo.todos
      default:
        throw new Error(`Command '${command}' not recogniezed`)
    }
  }
}

export default TodoService
