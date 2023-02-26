/* eslint-disable no-unused-vars */
export interface ITodo {
  title: string
  todos: ITask[]
  add(_task: ITask): void
  remove(id: number): boolean
  getLenght(): number
  getTodoById(id: number): any
}

export interface ITask {
  name: string
  id: number
}
