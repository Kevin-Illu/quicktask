import { ITodo } from '../../../interfaces/todo.js'
import TodoApp from './TodoApp.js'

class TodoService {
  private todo: TodoApp

  constructor(app: TodoApp) {
    this.todo = app
  }

  public addNewTodo = (todo: ITodo): void => {
    this.todo.addTodo(todo)
  }

  public getTodos = (): ITodo[] => {
    return this.todo.getTodos()
  }

  public updateTodo = (todo: ITodo) => {
    this.todo.updateTodo(todo)
  }

  public deleteTodo = (id: number) => {
    this.todo.deleteTodo(id)
  }

  public getNumberOfTodos = (): number => {
    return this.todo.getLenghtTodos()
  }
}

export default TodoService
