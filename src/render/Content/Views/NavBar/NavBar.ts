import { addStyles } from "../../../utils/add-styles.js";

class NavBar {
  private apps: String[]
  NavBarContent: HTMLElement;

  constructor() {
    this.NavBarContent = document.createElement('div');
    addStyles(this.NavBarContent, ['nav-bar'])
    this.apps = []
  }

  // navigate to apps = btn
  addApplications = (apps: HTMLButtonElement[] = []) => {
    if (apps.length === 0) return;
    apps.forEach(app => {
      this.apps.push(app.value)
      this.NavBarContent.appendChild(app)
    })
  }

  getAplications = (): String[] => {
    return this.apps
  }

  // INFO: i need to update the state of the buttons.
  render = () => {
    console.log(this.apps.length)
  }
}

export default NavBar;
