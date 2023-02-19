import htmlElement from '../config/ElementFactory/htmlElement.js'

abstract class View extends htmlElement {
  public element: any

  constructor(id: string) {
    super('div', { attributes: { name: 'view-container', id } })
  }
}

export default View
