import htmlElement from '../config/ElementFactory/htmlElement.js'

abstract class View extends htmlElement {
  public element: any

  constructor(id: string) {
    super('div', { attributes: { name: 'view-container', id } })
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
