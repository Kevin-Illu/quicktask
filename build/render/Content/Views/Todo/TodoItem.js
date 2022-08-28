import Button from "../../../GlobalComponents/Button.js";
import { addStyles } from "../../../utils/add-styles.js";
class TodoItem {
    constructor(todo, [editForm, remove, edit]) {
        this.setStateColor = (state) => {
            if (state == "on hold")
                state = "on-hold";
            addStyles(this.state, [state]);
        };
        this.item = document.createElement("div");
        addStyles(this.item, ["todo-item"]);
        this.container = document.createElement("div");
        addStyles(this.container, ["todo-item__container"]);
        this.state = document.createElement("div");
        addStyles(this.state, ["todo-item__state"]);
        this.title = document.createElement("p");
        addStyles(this.title, ["todo-item__title"]);
        // set values to title and state
        this.setStateColor(todo.state);
        this.title.innerText = todo.title;
        this.containerButtons = document.createElement("div");
        addStyles(this.containerButtons, ["todo-item__containerButtons"]);
        const DSettings = {
            icon: './public/assets/delete.svg',
            text: null,
            func: () => remove(todo.id),
            styles: ['btn', 'btn-remove']
        };
        this.btnDelete = new Button(DSettings);
        const ESettings = {
            icon: './public/assets/edit.svg',
            text: null,
            func: () => editForm(todo, edit),
            styles: ['btn', 'btn-edit']
        };
        this.btnEdit = new Button(ESettings);
        this.container.appendChild(this.state);
        this.container.appendChild(this.title);
        this.item.appendChild(this.container);
        this.containerButtons.appendChild(this.btnDelete.button);
        this.containerButtons.appendChild(this.btnEdit.button);
        this.item.appendChild(this.containerButtons);
    }
}
export default TodoItem;
