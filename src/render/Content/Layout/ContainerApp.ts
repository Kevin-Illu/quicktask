import { addStyles } from '../../utils/add-styles.js';

class ContainerApp {
	public container: HTMLDivElement;
	public containerApp: HTMLDivElement;
	public containerNavBar: HTMLDivElement;

	constructor() {
		this.container = document.createElement('div');
		this.containerApp = document.createElement('div');
		this.containerNavBar = document.createElement('div');
		this.container.appendChild(this.containerNavBar);
		this.container.appendChild(this.containerApp);
		addStyles(this.container, ["container-app","content"])
		addStyles(this.containerApp, ["app"])
		addStyles(this.containerNavBar, ["navbar-container"])
	};

	addNavBar = (NavBar: HTMLElement) => {
		this.containerNavBar.appendChild(NavBar);
	}
	addApp = (App: HTMLElement) => {
		this.containerApp.appendChild(App);
	}
};

export default ContainerApp;
