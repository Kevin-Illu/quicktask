import Select from "../../../GlobalComponents/Select.js";
import { addStyles } from '../../../utils/add-styles.js';
import Button from "../../../GlobalComponents/Button.js";
class TaskForm {
    constructor() {
        this.displayAddTask = (addF) => {
            const task = {
                title: this._title.value,
                description: this._description.value,
                state: this._selectState.getValue()
            };
            const settings = {
                text: 'Add',
                icon: null,
                func: (e) => {
                    e.preventDefault();
                    addF(task);
                },
                styles: ["btn-add-task"]
            };
            const add = new Button(settings);
            add.button.type = 'submit';
            this.form.appendChild(add.button);
        };
        this.displayUpdateTask = (todo, updateF) => {
            this._title.value = todo.title;
            this._description.value = todo.description;
            this._selectState.setDefaultValue(todo.state);
            const task = {
                id: todo.id,
                title: this._title.value,
                description: this._description.value,
                state: this._selectState.getValue
            };
            const settings = {
                text: 'Update',
                icon: null,
                func: (e) => {
                    e.preventDefault();
                    updateF(task);
                },
                styles: ["btn-update-task"]
            };
            const update = new Button(settings);
            update.button.type = 'submit';
            this.form.appendChild(update.button);
        };
        this.AppendSelectOPtions = (options, defaultValue = false) => {
            this._selectState.setOptions(options);
            if (defaultValue)
                this._selectState.setDefaultValue(defaultValue);
        };
        this.form = document.createElement('form');
        this.form.setAttribute('id', 'todo-form');
        addStyles(this.form, ["add-form"]);
        this._titleAndSelectContainer = document.createElement('div');
        addStyles(this._titleAndSelectContainer, ["add-form__titleAndSelectContainer"]);
        this._title = document.createElement('input');
        this._title.placeholder = 'Add a nwe task to your project';
        this._title.type = 'text';
        // this._title.setAttribute('autofocus', 'true');
        addStyles(this._title, ["titleAndSelectContainer__title"]);
        this._selectState = new Select();
        addStyles(this._selectState.select, ["titleAndSelectContainer__selectState"]);
        this._description = document.createElement('textarea');
        this._description.placeholder = 'Do you want to add a description :v7';
        addStyles(this._description, ['add-form__description']);
        this._titleAndSelectContainer.appendChild(this._title);
        this._titleAndSelectContainer.appendChild(this._selectState.select);
        this.form.appendChild(this._titleAndSelectContainer);
        this.form.appendChild(this._description);
    }
}
export default TaskForm;
const options = ["select any state", "open", "work", "on hold"];
