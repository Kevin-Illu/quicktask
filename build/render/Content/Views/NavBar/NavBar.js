import { addStyles } from "../../../utils/add-styles.js";
class NavBar {
    constructor() {
        // navigate to apps = btn
        this.addApplications = (apps = []) => {
            if (apps === [] || apps.length === 0) {
                console.log('fail');
                return;
            }
            apps.forEach(app => this.NavBarContent.appendChild(app));
        };
        this.NavBarContent = document.createElement('div');
        addStyles(this.NavBarContent, ['nav-bar']);
    }
}
export default NavBar;
