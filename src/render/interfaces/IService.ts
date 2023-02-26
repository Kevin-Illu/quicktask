export type TodoServiceCommand =
  | '[ADD] new todo'
  | '[GET] lenght todos'
  | '[DELETE] todo by id'
  | '[GET] title app'
  | '[GET] todos'
  | '[GET] todo by id'
  | '[UPDATE] todo by id'

export interface IService {
  // eslint-disable-next-line no-unused-vars
  executeCommand(
    // eslint-disable-next-line no-unused-vars
    command: TodoServiceCommand,
    // eslint-disable-next-line no-unused-vars
    args?: any
  ): any
}
