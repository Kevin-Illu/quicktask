import { ITodo } from '../../../interfaces/todo'
import { RemoveChild } from '../../../utils/tools.js'

interface IViewServices {
  formService: any
  todoService: any
  todolistService: any
}

class TodoView {
  private parent: HTMLElement
  private formService: any
  private todoService: any
  private todoListService: any

  constructor(
    parent: HTMLElement,
    { formService, todoService, todolistService }: IViewServices
  ) {
    this.parent = parent
    this.formService = formService //TODO: make this service
    this.todoService = todoService //TODO: make this service too
    this.todoListService = todolistService //TODO: add this too
  }

  public displayForm = (action: 'add' | 'update', todo: ITodo): void => {
    RemoveChild(this.parent)

    if (action === 'add') {
      this.formService.displayAddForm(this.todoService.addTodo)
      this.parent.appendChild(this.todoService.getForm)
    }

    if (action === 'update') {
      this.formService.displayUpdateForm(todo, this.todoService.updateTodo)
      this.parent.appendChild(this.todoService.getForm)
    }

    throw new Error('action invalid, please put any of this: update or add')
  }

  public displayTodoList = () => {
    RemoveChild(this.parent)
    this.todoListService.executeCommand('[ACTION] display todos')
  }
}

export default TodoView
