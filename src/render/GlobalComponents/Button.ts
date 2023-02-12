import { addStyles } from '../utils/add-styles.js'
import { btnSettings } from '../types/index'

class Button {
  public button: HTMLButtonElement
  private _settings: btnSettings
  private _text: HTMLParagraphElement
  private _img: HTMLImageElement
  private _container: HTMLDivElement

  constructor({
    icon = null,
    text = null,
    func = null,
    styles = [],
  }: btnSettings) {
    this.button = document.createElement('button')
    this._settings = { icon, text, func, styles }
    this._text = document.createElement('p')
    this._img = document.createElement('img')
    this._container = document.createElement('div')
    this.appendContent(this._settings)
  }

  appendContent = (settings: btnSettings): void => {
    const { icon, text, func, styles } = settings
    const errorMessage = `Provide a valid icon or text for the 
			button if you provide both then the button will 
			contain icon and text`

    addStyles(this.button, styles)
    if (func !== null) this.button.onclick = func

    if (!icon && !text) {
      throw new Error(errorMessage)
    } else if (icon && text) {
      this._img.src = icon
      this._text.innerText = text

      this._container.appendChild(this._img)
      this._container.appendChild(this._text)
      this.button.appendChild(this._container)
    } else if (!icon) {
      this._text.innerText = text || 'no hay texto :/'

      this.button.appendChild(this._text)
    } else if (!text) {
      this._img.src = icon

      this.button.appendChild(this._img)
    }
  }

  renameButton = (text: string) => {
    this._text.innerText = text
  }
}

export default Button
