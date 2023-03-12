import TodoService from './features/todo/TodoService.js'
import TodoView from './features/todo/ViewTodo.js'
import LauncherView from './LauncherView.js'

interface IProps {
  view: LauncherView
  services?: any
}

export default class Launcher {
  private parent: HTMLElement
  private view: LauncherView

  private todoService: TodoService
  private todoView: TodoView

  constructor({ view, services }: IProps, parent: HTMLElement) {
    const { todoService, todoView } = services
    this.view = view
    this.parent = parent

    this.todoService = todoService
    this.todoView = todoView()
  }

  public run = () => {
    this.view.render(this.parent)
    // this.todoView.displayTodoList();
  }
}
