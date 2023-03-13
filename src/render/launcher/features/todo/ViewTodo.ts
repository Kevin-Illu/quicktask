import TaskForm from './Form/TaskForm.js'
import TodoList from './TodoList.js'
import TodoService from './TodoService.js'

import { RemoveChild } from '../../../utils/tools.js'
import { IHandlersActions, ITodo } from '../../../interfaces/todo.js'

class TodoView {
  private parent: HTMLElement
  private form: TaskForm
  private todoService: TodoService
  private containerApp: HTMLElement

  constructor(parent: HTMLElement, todoService: TodoService) {
    this.parent = parent
    this.containerApp = this.parent.querySelector('.app') as HTMLElement
    this.form = new TaskForm()
    this.todoService = todoService
  }

  public displayUpdateForm = (todo: ITodo) => {
    RemoveChild(this.containerApp)
    this.form.updateTask(todo, this.updateTodo)
    this.containerApp.appendChild(this.form.form)
  }

  public addANewTaskForm = (addAction: any) => {
    RemoveChild(this.containerApp)
    this.form.addNewTask((todo) => {
      addAction(todo)
      this.displayTodoList()
    })
    this.containerApp.appendChild(this.form.form)
  }

  public deleteTodo = (id: number) => {
    this.todoService.deleteTodo(id)
    this.displayTodoList()
  }

  public updateTodo = (todo: ITodo) => {
    this.todoService.updateTodo(todo)
    this.displayTodoList()
  }

  public displayTodoList = () => {
    RemoveChild(this.containerApp)

    //TODO: normalize this with a interface
    const handlers: IHandlersActions = {
      displayUpdateForm: this.displayUpdateForm,
      addNewTaskForm: this.addANewTaskForm,
      updateAction: this.updateTodo,
      deleteAction: this.deleteTodo,
      addAction: this.todoService.addNewTodo,
    }

    const todoList = new TodoList(this.todoService.getTodos(), handlers)
    this.containerApp.appendChild(todoList.list)
  }
}

export default TodoView
