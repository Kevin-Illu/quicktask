class LauncherView {
    constructor({ container, navigate }) {
        this.render = (parent) => {
            parent.appendChild(this.navigate.navigationBar);
            parent.appendChild(this.container.container);
            this.navigate.setTitle('QuickTask');
        };
        this.container = container;
        this.navigate = navigate;
    }
}
export default LauncherView;
