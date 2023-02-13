export interface IbtnSettings {
  iconPath?: string
  text?: string
  action: () => void
  styles: string[]
}

export type TodoState = 'on hold' | 'work' | 'done' | 'open'
