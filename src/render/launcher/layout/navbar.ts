import { addStyles } from '../../utils/tools.js'

class NavBar {
  private apps: String[]
  NavBarContent: HTMLElement

  constructor() {
    this.NavBarContent = document.createElement('div')
    addStyles(this.NavBarContent, ['nav-bar'])
    this.apps = []
  }

  // navigate to apps = btn
  addApplications = (apps: HTMLButtonElement[] = []) => {
    if (apps.length === 0) return
    apps.forEach((app) => {
      this.apps.push(app.value)
      this.NavBarContent.appendChild(app)
    })
  }

  getAplications = (): String[] => {
    return this.apps
  }
}

export default NavBar
