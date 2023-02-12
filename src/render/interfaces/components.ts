export interface IbtnSettings {
  iconPath?: string
  text?: string
  action: () => void
  styles: Array<string>
}

export type TodoState = 'on hold' | 'work' | 'done' | 'open'
