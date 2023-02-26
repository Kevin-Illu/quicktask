import Button from '../../../components/Button.js'
import { ITask } from '../../../interfaces/ITodo.js'
import TodoService from '../../../services/TodoService.js'
import View from '../../view.js'
import ViewTodoList from './TodoList/ViewTodoList.js'

interface IExtras {
  // eslint-disable-next-line no-unused-vars
  setCurrentAction: (title: string) => void
}

class ViewTodo extends View {
  private service: TodoService
  // eslint-disable-next-line no-unused-vars
  private setCurrentAction: (name: string) => void
  private viewTodoList: ViewTodoList
  private todos: ITask[]
  private lenghtOfTodos: number
  private todoAppContainer: HTMLElement
  private btnDelete: Button

  constructor(
    todoService: TodoService,
    // eslint-disable-next-line no-unused-vars
    extras: IExtras
  ) {
    super('div', 'todo-view')
    this.addLayout(`
      <div id="todo-app"></div>
    `)
    this.todoAppContainer = this.view.querySelector('#todo-app') as HTMLElement

    this.service = todoService
    this.setCurrentAction = extras.setCurrentAction

    this.todos = this.service.executeCommand('[GET] todos')
    this.lenghtOfTodos = this.service.executeCommand('[GET] lenght todos')

    this.viewTodoList = new ViewTodoList(this.todos)
    this.viewTodoList.render(this.todoAppContainer)

    this.setCurrentAction(`TodoList ${this.lenghtOfTodos}`)

    this.btnDelete = new Button({
      attributes: {
        id: 'btnDelete',
      },
      events: {
        click: () => {
          this.todoAppContainer.removeChild(this.viewTodoList.element)
          this.viewTodoList.render(this.todoAppContainer)
          this.service.executeCommand('[DELETE] todo by id', 1)
        },
      },
      text: 'delete all',
    })

    this.todoAppContainer.appendChild(this.btnDelete.element)
  }
}

export default ViewTodo
