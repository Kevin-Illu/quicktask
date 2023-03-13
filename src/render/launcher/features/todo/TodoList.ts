import Button from '../../../components/Button.js'
import { IbtnSettings } from '../../../interfaces/components.js'
import { IHandlersActions, ITodo } from '../../../interfaces/todo.js'
import { addStyles } from '../../../utils/tools.js'
import InitialScreen from './InitialScreen.js'
import TodoItem from './TodoItem.js'

class TodoList {
  public list: HTMLDivElement
  private addNewTodoBtn: Button
  private displayUpdateForm: any
  private removeItem: any
  private updateItem: any
  private addNewTask: any
  private initialScreen: InitialScreen
  private add: any

  constructor(todos: ITodo[], handlers: IHandlersActions) {
    this.list = document.createElement('div')
    addStyles(this.list, ['todo-list'])
    // handlers

    const {
      displayUpdateForm,
      addNewTaskForm,
      updateAction,
      deleteAction,
      addAction,
    } = handlers

    this.displayUpdateForm = displayUpdateForm
    this.removeItem = deleteAction
    this.updateItem = updateAction
    this.addTodoItems(todos)
    this.addNewTask = addNewTaskForm
    this.add = addAction

    const addTaskSettings: IbtnSettings = {
      iconPath: './public/assets/add.svg',
      action: () => this.addNewTask(this.add),
      styles: ['btn', 'btn-addTask'],
    }

    this.addNewTodoBtn = new Button(addTaskSettings)
    this.initialScreen = new InitialScreen()
    if (todos.length == 0) this.list.appendChild(this.initialScreen.page)
    this.list.appendChild(this.addNewTodoBtn.button)
  }

  private addTodoItems = (todos: ITodo[]): void => {
    if (todos.length == 0) return

    todos.forEach((todo) => {
      const props = {
        displayForm: this.displayUpdateForm,
        update: this.updateItem,
        remove: this.removeItem,
      }
      const { item } = new TodoItem(todo, props)
      this.list.appendChild(item)
    })
  }
}

export default TodoList
