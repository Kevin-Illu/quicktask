import { TodoState } from './components'

export interface ITodo {
  id: number
  description: string
  title: string
  state: TodoState
}
