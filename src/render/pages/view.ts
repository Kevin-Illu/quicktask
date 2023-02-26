import htmlElement from '../config/ElementFactory/htmlElement.js'

abstract class View extends htmlElement {
  public view: HTMLElement

  constructor(type: string, id: string) {
    super(type, { attributes: { name: 'view-container', id } })
    this.view = this.element
  }

  public addLayout(layout: string) {
    try {
      this.view.innerHTML = layout
    } catch (error) {
      console.error(
        `the layout passed can be inside of ${this.element}: \n\n ${error}`
      )
    }
  }

  public render(parent: HTMLElement): void {
    // this.removeChildren(parent)
    parent.appendChild(this.view)
  }
}

export default View
