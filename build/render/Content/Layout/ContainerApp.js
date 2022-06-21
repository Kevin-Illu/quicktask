import { addStyles } from '../../utils/add-styles.js';
class ContainerApp {
    constructor() {
        this.addNavBar = (NavBar) => {
            this.containerNavBar.appendChild(NavBar);
        };
        this.addApp = (App) => {
            this.containerApp.appendChild(App);
        };
        this.container = document.createElement('div');
        this.containerApp = document.createElement('div');
        this.containerNavBar = document.createElement('div');
        this.container.appendChild(this.containerNavBar);
        this.container.appendChild(this.containerApp);
        addStyles(this.container, ["container-app", "content"]);
        addStyles(this.containerApp, ["app"]);
        addStyles(this.containerNavBar, ["navbar-container"]);
    }
    ;
}
;
export default ContainerApp;
