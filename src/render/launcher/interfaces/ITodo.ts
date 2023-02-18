export interface ITodo {
  // eslint-disable-next-line no-unused-vars
  add(_task: ITask): void
  // eslint-disable-next-line no-unused-vars
  remove(_task: ITask): boolean
  getLenght(): number
}

export interface ITask {
  name: string
  id: number
}
