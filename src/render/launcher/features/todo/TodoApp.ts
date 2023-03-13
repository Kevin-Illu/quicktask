import { ITodo } from '../../../interfaces/todo.js'
import { RemoveChild } from '../../../utils/tools.js'
import TaskForm from './Form/TaskForm.js'
import TodoList from './TodoList.js'

class TodoApp {
  private todos: ITodo[]
  private parent: HTMLElement
  private taskForm: TaskForm

  constructor(parentElement: HTMLElement) {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]') || []
    this.parent = parentElement
    this.taskForm = new TaskForm()
  }

  private _commit = () => {
    localStorage.setItem('todos', JSON.stringify(this.todos))
    this.displayTodos()
  }

  public getLenghtTodos = () => {
    return this.todos.length
  }

  public displayAddForm = () => {
    if (!this.parent) return
    RemoveChild(this.parent)
    this.taskForm.addNewTask(this.addTodo)
    this.parent.appendChild(this.taskForm.form)
  }

  public displayUpdateForm = (todo: ITodo) => {
    if (!this.parent) return
    RemoveChild(this.parent)
    this.taskForm.updateTask(todo, this.updateTodo)
    this.parent.appendChild(this.taskForm.form)
  }

  // CRUD
  public displayTodos = () => {
    RemoveChild(this.parent)
    const handlers = [
      this.displayAddForm,
      this.displayUpdateForm,
      this.deleteTodo,
      this.updateTodo,
    ]
    const todoList = new TodoList(this.todos, handlers)
    this.parent.appendChild(todoList.list)
  }

  public getTodos = (): ITodo[] => {
    return this.todos
  }

  public addTodo = ({ title, description, state }: ITodo) => {
    const todo = {
      id: Date.now(),
      title,
      description,
      state,
    }

    this.todos.push(todo)
    this._commit()
  }

  public updateTodo = ({ id, title, description, state }: ITodo) => {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            title,
            description,
            state,
          }
        : todo
    )
    this._commit()
  }

  public deleteTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id)
    this._commit()
  }
}

export default TodoApp
