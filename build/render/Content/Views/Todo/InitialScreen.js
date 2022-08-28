import { addStyles } from "../../../utils/add-styles.js";
class InitialScreen {
    constructor() {
        this.page = document.createElement("div");
        this._title = document.createElement("h1");
        this._title.innerText = "Nothing to do?, Add a task!";
        this._pageActions = document.createElement("div");
        this.page.appendChild(this._title);
        this.page.appendChild(this._pageActions);
        addStyles(this.page, ["InitialScreen"]);
    }
}
export default InitialScreen;
