import View from '../view.js'
import { closeButton, minimizeButton, resizeButton } from './actionButtons.js'

class ViewLauncher extends View {
  private title: string
  private headerContainer: HTMLElement
  private systemButtonsContainer: HTMLElement
  private mainContainer: HTMLElement
  private footerContainer: HTMLElement

  constructor(title: string) {
    // this.view: principal containers
    super('div', 'view-launcher')
    // set local title
    this.title = title
    // adding a layout
    this.addLayout(`
        <header id="launcher__appbar">
          <div class="appbar__title">
            <p class="title">${this.title}</p>
          </div>
          <div id="appbar__current-action">
            <p>current action</p>
          </div>
          <div id="appbar__system-buttons">
          </div>
        </header>
        <main id="launcher__content">
          <div class="container">
          </div>
        </main>
        <footer id="launcher__footer">
          <div class="container">
          </div>
        </footer>
     `)

    this.headerContainer = this.view.querySelector(
      '#launcher__appbar'
    ) as HTMLElement

    this.systemButtonsContainer = this.view.querySelector(
      '#appbar__system-buttons'
    ) as HTMLElement

    this.mainContainer = this.view.querySelector(
      '#launcher__content'
    ) as HTMLElement

    this.footerContainer = this.view.querySelector(
      '#launcher__footer'
    ) as HTMLElement

    this.appendSystemButtons()
  }

  setNewTitle(title: string) {
    this.title = title
    const titleElement = this.view.querySelector('.title') as HTMLElement
    titleElement.textContent = title
  }

  appendSystemButtons() {
    const close = closeButton.element
    const resize = resizeButton.element
    const minimize = minimizeButton.element

    this.systemButtonsContainer.appendChild(minimize)
    this.systemButtonsContainer.appendChild(resize)
    this.systemButtonsContainer.appendChild(close)
  }
}

export default ViewLauncher
