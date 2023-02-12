import { IbtnSettings } from '../interfaces/components'
import { addStyles } from '../utils/tools.js'

class Button {
  public button: HTMLButtonElement
  private _settings: IbtnSettings
  private _text: HTMLParagraphElement
  private _img: HTMLImageElement
  private _container: HTMLDivElement

  constructor({ iconPath, text, action, styles = [] }: IbtnSettings) {
    this.button = document.createElement('button')
    this._settings = { iconPath, text, action, styles }
    this._text = document.createElement('p')
    this._img = document.createElement('img')
    this._container = document.createElement('div')
    this.appendContent(this._settings)
  }

  appendContent = (settings: IbtnSettings): void => {
    const { iconPath, text, action, styles } = settings
    const errorMessage = `Provide a valid iconPath or text for the 
			button if you provide both then the button will 
			contain iconPath and text`

    addStyles(this.button, styles)

    this.button.onclick = action

    if (!iconPath && !text) {
      throw new Error(errorMessage)
    } else if (iconPath && text) {
      this._img.src = iconPath
      this._text.innerText = text

      this._container.appendChild(this._img)
      this._container.appendChild(this._text)
      this.button.appendChild(this._container)
    } else if (!iconPath) {
      this._text.innerText = text || 'no hay texto :/'

      this.button.appendChild(this._text)
    } else if (!text) {
      this._img.src = iconPath

      this.button.appendChild(this._img)
    }
  }

  renameButton = (text: string) => {
    this._text.innerText = text
  }
}

export default Button
