import htmlElement from '../config/ElementFactory/htmlElement.js'

abstract class View extends htmlElement {
  public view: HTMLElement

  constructor(type: string, id: string) {
    super(type, { attributes: { name: 'view-container', id } })
    this.view = this.element
  }

  addLayout(layout: string) {
    try {
      this.element.innerHTML = layout
    } catch (error) {
      console.error(
        `the layout passed can be inside of ${this.element}: \n\n ${error}`
      )
    }
  }
}

export default View
