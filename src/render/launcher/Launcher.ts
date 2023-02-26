import DependencyContainer from '../config/dependencyConfig/DependencyContainer.js'
import TodoService from '../services/TodoService.js'

import { ITodo } from '../interfaces/ITodo'
import ViewLauncher from '../pages/launcher/ViewLauncher.js'
import ViewTodo from '../pages/features/todo/ViewTodo.js'
import View from '../pages/view.js'

class Launcher {
  private DependencyContainer: DependencyContainer
  public ViewContainer: ViewLauncher

  // to create an aplication we need this things

  private Todo: ITodo // app
  private ViewTodo: View // view
  private TodoService: TodoService // service

  constructor(DependencyContainer: DependencyContainer, view: ViewLauncher) {
    this.ViewContainer = view
    this.DependencyContainer = DependencyContainer

    // get the dependency of the DependencyContainer.
    this.Todo = this.DependencyContainer.resolve<ITodo>('Todo')
    this.TodoService = new TodoService(this.Todo)
    this.ViewTodo = new ViewTodo(this.TodoService, {
      setCurrentAction: this.ViewContainer.setCurrentAction,
    })

    // create a dependency service to perform operations
  }

  run() {
    this.ViewTodo.render(this.ViewContainer.mainContainer)
  }
}

export default Launcher
