import Select from "../../../GlobalComponents/Select.js";
import { addStyles } from '../../../utils/add-styles';
class AddForm {
    constructor() {
        this.form = document.createElement('form');
        this.form.setAttribute('id', 'todo-form');
        addStyles(this.form, ["add-form"]);
        this._titleAndSelectContainer = document.createElement('div');
        addStyles(this._titleAndSelectContainer, ["add-form__titleAndSelectContainer"]);
        this._title = document.createElement('input');
        this._title.placeholder = 'Add a nwe task to your project';
        this._title.type = 'text';
        addStyles(this._title, ["titleAndSelectContainer__title"]);
        this._selectState = new Select();
        addStyles(this._selectState.select, ["titleAndSelectContainer__selectState"]);
        this._description = document.createElement('textarea');
        addStyles(this._description, ['add-form__description']);
    }
}
export default AddForm;
