import Button from '../../../components/Button.js'
import { IbtnSettings, TodoState } from '../../../interfaces/components.js'
import { ITodo } from '../../../interfaces/todo.js'
import { addStyles } from '../../../utils/tools.js'

class TodoItem {
  public item: HTMLDivElement
  private container: HTMLDivElement
  private state: HTMLDivElement
  private title: HTMLDivElement

  private containerButtons: HTMLDivElement
  private btnEdit: Button
  private btnDelete: Button

  constructor(todo: ITodo, [editForm, remove, edit]: any) {
    this.item = document.createElement('div')
    addStyles(this.item, ['todo-item'])
    this.container = document.createElement('div')
    addStyles(this.container, ['todo-item__container'])
    this.state = document.createElement('div')
    this.state.innerHTML = `<p>${todo.state}</p>`
    addStyles(this.state, ['todo-item__state'])
    this.title = document.createElement('p')
    addStyles(this.title, ['todo-item__title'])

    // set values to title and state
    this.setStateColor(todo.state)
    this.title.innerText = todo.title

    this.containerButtons = document.createElement('div')
    addStyles(this.containerButtons, ['todo-item__containerButtons'])
    const DSettings: IbtnSettings = {
      iconPath: './public/assets/delete.svg',
      action: () => remove(todo.id),
      styles: ['btn', 'btn-remove'],
    }
    this.btnDelete = new Button(DSettings)

    const ESettings: IbtnSettings = {
      iconPath: './public/assets/edit.svg',
      action: () => editForm(todo, edit),
      styles: ['btn', 'btn-edit'],
    }
    this.btnEdit = new Button(ESettings)

    this.container.appendChild(this.state)
    this.container.appendChild(this.title)
    this.item.appendChild(this.container)

    this.containerButtons.appendChild(this.btnDelete.button)
    this.containerButtons.appendChild(this.btnEdit.button)
    this.item.appendChild(this.containerButtons)
  }

  private setStateColor = (state: TodoState): void => {
    let color: string = state
    addStyles(this.state, [color])
  }
}

export default TodoItem
