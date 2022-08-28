import { addStyles } from "../../../utils/add-styles.js";
class NavBar {
    constructor() {
        // navigate to apps = btn
        this.addApplications = (apps = []) => {
            if (apps.length === 0)
                return;
            apps.forEach(app => {
                this.apps.push(app.value);
                this.NavBarContent.appendChild(app);
            });
        };
        this.getAplications = () => {
            return this.apps;
        };
        // INFO: i need to update the state of the buttons.
        this.render = () => {
            console.log(this.apps.length);
        };
        this.NavBarContent = document.createElement('div');
        addStyles(this.NavBarContent, ['nav-bar']);
        this.apps = [];
    }
}
export default NavBar;
