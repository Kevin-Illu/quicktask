import ElementFactory from './ElementFactory.js'
import { ElementOptions } from './IElementFactory'

class htmlElement extends ElementFactory {
  public element: HTMLElement
  public children: htmlElement[] = []

  constructor(type: string, options: ElementOptions) {
    super()
    this.element = this.createElement(type, options)
  }

  addClassList(styles: string[]) {
    styles.forEach((style) => this.element.classList.add(style))
  }

  addChild(child: htmlElement) {
    this.children.push(child)
  }

  removeChild(child: htmlElement) {
    const index = this.children.indexOf(child)
    if (index === -1) return

    this.children.splice(index, 1)
    this.element.removeChild(child.element)
  }

  removeChildren() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild)
    }
    this.children = []
  }

  getChild(index: number) {
    return this.children[index]
  }

  getChildren() {
    return this.children
  }
}

export default htmlElement
