import { ITodo } from '../interfaces/ITodo'

class TodoService implements IService {
  private Todo: ITodo

  constructor(Todo: ITodo) {
    this.Todo = Todo
  }

  executeComand(command: string, args?: any): any {
    switch (command) {
      case 'add':
        this.Todo.add(args)
        console.log(`the ${args.name} was added`)
        break
      case 'remove':
        if (this.Todo.remove(args)) {
          console.log(`the ${args.name} was delited`)
          return
        }
        console.log('not removed')
        break
      case 'get lenght':
        return this.Todo.getLenght()
      default:
        console.log(`Command '${command}' not recogniezed`)
        break
    }
  }
}

export default TodoService
