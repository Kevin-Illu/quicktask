// import { ITodo } from '../../../interfaces/todo'
import TaskForm from './Form/TaskForm.js'
import TodoList from './TodoList.js'
import TodoService from './TodoService.js'

import { RemoveChild } from '../../../utils/tools.js'

class TodoView {
  private parent: HTMLElement
  private form: TaskForm
  private todoService: TodoService

  constructor(
    parent: HTMLElement,
    todoService: TodoService
  ) {
    this.parent = parent
    this.form = new TaskForm()
    this.todoService = todoService
  }

  public viewUpdateTaskForm = (args: any) => {
    const { todo, update } = args;
    this.form.updateTask(todo, update)
  }

  public viewAddNewTaskForm = (args: any) => {
    const { addNewTask } = args
    this.form.addNewTask(addNewTask)
  }

  public displayForm = (action: 'add' | 'update', args: any = null) => {
    if (!args) {
      console.error('pleas provide args')
    }

    if (action === 'add') {
      this.viewAddNewTaskForm(args)
    }

    if (action === 'update') {
      this.viewUpdateTaskForm(args)
    }
  }

  public displayTodoList = () => {
    RemoveChild(this.parent)

    const handlers = {
      displayForm: this.displayForm,
      update: this.todoService.updateTodo,
      delete: this.todoService.deleteTodo,
      add: this.todoService.addNewTodo
    }

    const todoList = new TodoList(this.todoService.getTodos(), handlers)
    this.parent.appendChild(todoList.list)
  }
}

export default TodoView
