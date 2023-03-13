import { ITodo } from '../../../interfaces/todo'

class TodoApp {
  private todos: ITodo[]

  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]') || []
  }

  private _commit = () => {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  public getLenghtTodos = () => {
    return this.todos.length
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
