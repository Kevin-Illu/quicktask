import { addStyles } from "../../../utils/add-styles.js";

class NavBar {
    NavBarContent: HTMLElement;

    constructor() {
        this.NavBarContent = document.createElement('div');
        addStyles(this.NavBarContent, ['nav-bar'])
    }

    // navigate to apps = btn
    addApplications = (apps: HTMLButtonElement[] = []) => {
        if(apps === [] || apps.length === 0) {
            console.log('fail');
            return;
        }
        apps.forEach(app => this.NavBarContent.appendChild(app))
    }
}

export default NavBar;