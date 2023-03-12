/* eslint-disable  no-unused-vars */
import Button from '../../../components/Button.js'
import { IbtnSettings } from '../../../interfaces/components.js'
import { ITodo } from '../../../interfaces/todo.js'
import { addStyles } from '../../../utils/tools.js'

class TodoItem {
  public item: HTMLElement
  private deleteTodo: (id: number) => void
  private updateTodo: (todo: ITodo) => void
  private goToForm: (todo: ITodo, updateTodo: (todo: ITodo) => void) => void
  private todo: ITodo

  constructor(todo: ITodo, [goToForm, deleteTodo, updateTodo]: any) {
    this.todo = todo
    this.goToForm = goToForm
    this.deleteTodo = deleteTodo
    this.updateTodo = updateTodo

    this.item = this.createItem(todo, this.deleteTodo)
    this.handleClick()
  }

  private createItem = (
    todo: ITodo,
    // eslint-disable-next-line no-unused-vars
    deleteTodo: (id: number) => void
  ): HTMLElement => {
    const item = document.createElement('div')
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
    item.appendChild(container)

    containerButtons.appendChild(btnDelete.button)
    item.appendChild(containerButtons)

    return item
  }

  private handleClick = () => {
    const todoElement = this.item.querySelector(
      '.todo-item__container'
    ) as HTMLElement
    todoElement.addEventListener('click', () => {
      this.goToForm(this.todo, this.updateTodo)
    })
  }
}

export default TodoItem
