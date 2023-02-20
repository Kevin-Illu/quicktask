import { IElementOptions } from './IElementFactory'

export interface Component {
  render: () => void
}

export interface IButtonOptions extends IElementOptions {
  iconPath?: string
}
