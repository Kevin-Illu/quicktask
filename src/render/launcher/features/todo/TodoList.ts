import Button from '../../../components/Button.js'
import { IbtnSettings } from '../../../interfaces/components.js'
import { ITodo } from '../../../interfaces/todo.js'
import { addStyles } from '../../../utils/tools.js'
import InitialScreen from './InitialScreen.js'
import TodoItem from './TodoItem.js'

class TodoList {
  public list: HTMLDivElement
  private addNewTodoBtn: Button
  private displayForm: any
  private removeItem: () => void
  private updateItem: () => void
  private initialScreen: InitialScreen

  constructor(todos: ITodo[], handlers: any) {
    this.list = document.createElement('div')
    addStyles(this.list, ['todo-list'])
    // handlers
    // const [goToAddForm, goToUpdateForm, remove, edit] = handlers
    const { displayForm, update, remove, add } = handlers

    this.displayForm = displayForm
    this.removeItem = remove
    this.updateItem = update
    this.addTodoItems(todos)

    const addTaskSettings: IbtnSettings = {
      iconPath: './public/assets/add.svg',
      action: () => this.displayForm('add', add),
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
      const { item } = new TodoItem(todo, {
        goToForm: this.displayForm, 
        deleteTodo: this.removeItem,
        updateTodo: this.updateItem
      })
      this.list.appendChild(item)
    })
  }
}

export default TodoList
