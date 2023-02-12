import { TodoState } from '../../../../interfaces/components'

class Select {
  public select: HTMLSelectElement

  constructor(id: string) {
    this.select = document.createElement('select')
    this.select.setAttribute('id', id)
  }

  public setOptions = (options: string[]): void => {
    options.forEach((option) => {
      const optionTag = document.createElement('option')
      optionTag.value = option
      optionTag.innerText = option
      this.select.appendChild(optionTag)
    })
  }

  public getValue = (): TodoState => {
    const option = this.select.options[this.select.selectedIndex]
    return option.value === 'add state' ? 'open' : (option.value as TodoState)
  }

  public setCurrentValue = (state: TodoState): void => {
    const states = ['open', 'work', 'on hold', 'done']
    const current = states.indexOf(state)
    this.select.selectedIndex = current
  }

  public cleanOptions = () => {
    for (let i = this.select.options.length - 1; i >= 0; i--) {
      this.select.remove(i)
    }
  }
}

export default Select
