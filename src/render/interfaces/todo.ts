/* eslint-disable no-unused-vars */

import { TodoState } from './components'

export interface ITodo {
  id: number
  description: string
  title: string
  state: TodoState
}

export interface IHandlersActions {
  displayUpdateForm: (todo: ITodo) => void
  addNewTaskForm: (addAction: (todo: ITodo) => void) => void
  updateAction: (todo: ITodo) => void
  deleteAction: (id: number) => void
  addAction: (todo: ITodo) => void
}
