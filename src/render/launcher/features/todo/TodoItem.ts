/* eslint-disable  no-unused-vars */
import Button from '../../../components/Button.js'
import { IbtnSettings } from '../../../interfaces/components.js'
import { ITodo } from '../../../interfaces/todo.js'
import { addStyles } from '../../../utils/tools.js'

class TodoItem {
  public item: HTMLElement
  private deleteTodo: (id: number) => void
  private updateTodo: (todo: ITodo) => void
  private displayForm: (todo: ITodo, updateTodo: (todo: ITodo) => void) => void
  private todo: ITodo

  constructor(todo: ITodo, { displayForm, update, remove }: any) {
    this.todo = todo
    this.displayForm = displayForm
    this.deleteTodo = remove
    this.updateTodo = update

    this.item = this.createItem(todo, this.deleteTodo)
  }

  private createItem = (
    todo: ITodo,
    // eslint-disable-next-line no-unused-vars
    deleteTodo: (id: number) => void
  ): HTMLElement => {
    const item = document.createElement('div')
    item.tabIndex = 0
    addStyles(item, ['todo-item'])

    const container = document.createElement('div')
    addStyles(container, ['todo-item__container'])

    const state = document.createElement('div')
    state.innerHTML = `<p>${todo.state}</p>`
    addStyles(state, ['todo-item__state', todo.state])

    const title = document.createElement('p')
    addStyles(title, ['todo-item__title'])

    // set values to title and state
    title.innerText = todo.title

    const containerButtons = document.createElement('div')
    addStyles(containerButtons, ['todo-item__containerButtons'])
    const DSettings: IbtnSettings = {
      iconPath: './public/assets/delete.svg',
      action: () => deleteTodo(this.todo.id),
      styles: ['btn', 'btn-remove'],
    }
    const btnDelete = new Button(DSettings)

    container.appendChild(state)
    container.appendChild(title)
    container.onclick = () => this.displayForm(this.todo, this.updateTodo)
    item.appendChild(container)

    containerButtons.appendChild(btnDelete.button)
    item.appendChild(containerButtons)

    return item
  }
}

export default TodoItem
