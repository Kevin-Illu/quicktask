import DependencyContainer from './DependencyContainer'
import { ITodo } from './interfaces/ITodo'
import TodoService from './services/TodoService.js'

class Launcher {
  private DependencyContainer: DependencyContainer
  private todo: ITodo
  private todoService: TodoService

  constructor(DependencyContainer: DependencyContainer) {
    this.DependencyContainer = DependencyContainer

    // get the dependency of the DependencyContainer.
    this.todo = this.DependencyContainer.resolve<ITodo>('Todo')

    // create a dependency service to perform operations
    this.todoService = new TodoService(this.todo)
  }

  run() {
    this.todoService.executeComand('add', { name: 'hola', id: 1 })
    this.todoService.executeComand('remove', { name: 'hola', id: 1 })
    const lenght = this.todoService.executeComand('get lenght')
    console.log(lenght)
  }
}

export default Launcher
