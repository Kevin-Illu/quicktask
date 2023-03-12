/* eslint-disable no-unused-vars */
import { IbtnSettings } from '../../../../interfaces/components'
import { ITodo } from '../../../../interfaces/todo'

import { addStyles } from '../../../../utils/tools.js'
import Button from '../../../../components/Button.js'
import Select from './Select.js'

class TaskForm {
  public form: HTMLFormElement
  private title: HTMLInputElement
  private description: HTMLTextAreaElement
  private Button: Button
  private Select: Select
  private titleAndSelectContainer: HTMLElement

  constructor() {
    this.form = this.createForm()
    this.title = this.form.querySelector(
      '.titleAndSelectContainer__title'
    ) as HTMLInputElement
    this.description = this.form.querySelector(
      '.add-form__description'
    ) as HTMLTextAreaElement
    this.titleAndSelectContainer = this.form.querySelector(
      '.add-form__titleAndSelectContainer'
    ) as HTMLElement

    this.Select = new Select('todo-state')
    addStyles(this.Select.select, ['titleAndSelectContainer__selectState'])
    this.Select.cleanOptions()
    this.Select.setOptions(this.Select.states.sort())

    this.titleAndSelectContainer.appendChild(this.Select.select)

    const settings: IbtnSettings = {
      text: 'Add',
      action: () => console.log('hola? para que se usa xD'),
      styles: ['btn-add-task'],
    }
    this.Button = new Button(settings)
    this.form.appendChild(this.Button.button)
  }

  public addNewTask = (addFunc: (taks: ITodo) => void) => {
    this.cleanForm()
    this.Button.renameButton('create')

    this.Button.button.onclick = (e) => {
      e.preventDefault()

      if (this.title.value.trim() === '') return

      const task = {
        id: 0,
        title: this.title.value,
        description: this.description.value,
        state: this.Select.getValue(),
      }

      addFunc(task)
    }
  }

  public updateTask = (todo: ITodo, update: (task: ITodo) => void) => {
    this.title.value = todo.title
    this.description.value = todo.description
    this.Select.setCurrentValue(todo.state)
    this.Button.renameButton('update')

    this.Button.button.onclick = (e) => {
      e.preventDefault()

      if (this.title.value.trim() === '') return

      const task = {
        id: todo.id,
        title: this.title.value,
        description: this.description.value,
        state: this.Select.getValue(),
      }

      update(task)
    }
  }

  private createForm = (): HTMLFormElement => {
    const form = document.createElement('form')
    form.setAttribute('id', 'todo-form')
    addStyles(form, ['add-form'])

    const titleAndSelectContainer = document.createElement('div')
    addStyles(titleAndSelectContainer, ['add-form__titleAndSelectContainer'])

    const titleElement = document.createElement('input')
    titleElement.placeholder = 'Add a new task to your project'
    titleElement.type = 'text'
    titleElement.spellcheck = false
    titleElement.setAttribute('autofocus', 'true')
    addStyles(titleElement, ['titleAndSelectContainer__title'])

    const description = document.createElement('textarea')
    description.placeholder = 'Do you want to add a description?'
    description.spellcheck = false
    description.addEventListener('input', () => this.changeHeight(description))
    addStyles(description, ['add-form__description'])

    titleAndSelectContainer.appendChild(titleElement)

    form.appendChild(titleAndSelectContainer)
    form.appendChild(description)

    return form
  }

  private changeHeight = (input: HTMLTextAreaElement): void => {
    input.style.height = 'auto'
    input.style.height = input.scrollHeight + 'px'
  }

  private cleanForm = () => {
    this.title.value = ''
    this.description.value = ''
  }
}

export default TaskForm
