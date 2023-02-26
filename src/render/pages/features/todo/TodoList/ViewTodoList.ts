import { ITask } from '../../../../interfaces/ITodo'
import View from '../../../view.js'

class ViewTodoList extends View {
  private todos: ITask[]
  private list: HTMLElement

  constructor(todos: ITask[]) {
    super('section', 'todo-list')
    this.todos = todos

    this.addLayout(`
      <div id="list"></div>
    `)
    this.list = this.view.querySelector('#list') as HTMLElement
    this.fillTodoList()
  }

  fillTodoList() {
    this.todos.forEach((todo) => {
      const item = this.createItem(todo)
      this.list.appendChild(item)
    })
  }

  createItem(todo: ITask) {
    const item = this.createElement('div', {
      attributes: {
        id: todo.id.toString(),
      },
    })

    item.innerText = `${todo.id} ${todo.name}`

    return item
  }
}

export default ViewTodoList
