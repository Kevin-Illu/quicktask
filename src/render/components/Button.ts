import htmlElement from '../config/ElementFactory/htmlElement.js'
import { IButtonOptions } from '../interfaces/Icomponents.js'

class Button extends htmlElement {
  constructor(options: IButtonOptions) {
    super('button', options)
    this.withIcon(options)
  }

  withIcon({ iconPath, text }: IButtonOptions) {
    if (text && iconPath) {
      this.addClasList(['btn', 'btn-icon-text'])

      const icon = this.createElement('img', { attributes: { src: iconPath } })

      const btnText = this.createElement('p')

      btnText.innerText = text

      this.element.appendChild(icon)
      this.element.appendChild(btnText)
    } else if (iconPath) {
      this.addClasList(['btn', 'btn-icon'])
      const icon = this.createElement('img', { attributes: { src: iconPath } })
      this.element.appendChild(icon)
    } else if (text) {
      this.addClasList(['btn', 'btn-text'])
      const btnText = this.createElement('p')
      btnText.innerText = text
      this.element.appendChild(btnText)
    }
  }
}

export default Button
