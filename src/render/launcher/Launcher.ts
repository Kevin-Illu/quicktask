import DependencyContainer from '../config/dependencyConfig/DependencyContainer.js'
import TodoService from '../services/TodoService.js'

import { ITodo } from '../interfaces/ITodo'

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

  run() {}
}

export default Launcher
