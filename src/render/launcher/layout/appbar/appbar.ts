import Button from '../../../components/Button.js'
import { addStyles } from '../../../utils/tools.js'

class MainNavigationBar {
  public navigationBar: HTMLElement
  private _trafficLightsContainer: HTMLElement
  public _titleContainer: HTMLElement
  private _title: HTMLElement

  constructor(classList: string[] = [], buttons: Button[] = []) {
    // creating the main container
    this.navigationBar = document.createElement('nav')

    // craeting the container for the trafficLights
    this._trafficLightsContainer = document.createElement('div')
    this.addButtonsToTLContainer(buttons)

    // craeting the container for the title
    this._titleContainer = document.createElement('div')
    this._title = document.createElement('p')
    this._titleContainer.appendChild(this._title)

    addStyles(this._trafficLightsContainer, ['traffic-Lights-container'])
    addStyles(this.navigationBar, classList)
    addStyles(this._titleContainer, ['title-container'])
    addStyles(this._title, ['title'])

    this.navigationBar.appendChild(this._titleContainer)
    this.navigationBar.appendChild(this._trafficLightsContainer)
  }

  addButtonsToTLContainer = (buttons: Button[]) => {
    buttons.forEach((btn) =>
      this._trafficLightsContainer.appendChild(btn.button)
    )
  }

  setTitle = (title: string) => {
    if (!title) return
    this._title.innerText = title
  }
}

export default MainNavigationBar
