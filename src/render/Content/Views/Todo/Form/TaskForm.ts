import Select from "./Select.js";
import { addStyles } from '../../../../utils/add-styles.js';
import Button from "../../../../GlobalComponents/Button.js";
import { addTodo, btnSettings, Todo } from "../../../../types/index.js";


class TaskForm {
  public form: HTMLFormElement;
  private _titleAndSelectContainer: HTMLDivElement;
  private _title: HTMLInputElement;
  public _selectState: Select;
  private _description: HTMLTextAreaElement;
  private _actionForm: Button;

  constructor() {
    this.form = document.createElement('form');
    this.form.setAttribute('id', 'todo-form');
    addStyles(this.form, ["add-form"]);

    this._titleAndSelectContainer = document.createElement('div');
    addStyles(this._titleAndSelectContainer, ["add-form__titleAndSelectContainer"]);

    this._title = document.createElement('input');
    this._title.placeholder = 'Add a new task to your project';
    this._title.type = 'text';
    this._title.setAttribute('autofocus', 'true');
    addStyles(this._title, ["titleAndSelectContainer__title"]);

    this._selectState = new Select("todo-state");
    addStyles(this._selectState.select, ["titleAndSelectContainer__selectState"]);

    this._description = document.createElement('textarea');
    this._description.placeholder = 'Do you want to add a description :v7';
    addStyles(this._description, ['add-form__description']);

    this._selectState.cleanOptions();
    this._selectState.setOptions(["open", "work", "on hold", "done"]);

    const settings: btnSettings = {
      text: 'Add',
      icon: null,
      func: null,
      styles: ["btn-add-task"]
    }
    this._actionForm = new Button(settings)

    this._titleAndSelectContainer.appendChild(this._title);
    this._titleAndSelectContainer.appendChild(this._selectState.select);

    this.form.appendChild(this._titleAndSelectContainer);
    this.form.appendChild(this._description);
    this.form.appendChild(this._actionForm.button);

  }

  public addForm = (addFunc: ({ title, description, state }: addTodo) => void) => {
    this._title.value = "";
    this._description.value = "";
    this._actionForm.renameButton("add");

    this._actionForm.button.onclick = (e) => {
      e.preventDefault();
      // TODO: add a notification here!
      // this happend when the input title and the description are empty
      if (this._title.value === "") {
        return;
      };
      const task = {
        title: this._title.value,
        description: this._description.value,
        state: this._selectState.getValue(),
      }
      addFunc(task);
    }
  }

  public updateForm = (todo: Todo, updateFunc: ({ id, title, description, state }: Todo) => void) => {
    this._title.value = todo.title;
    this._description.value = todo.description;
    this._selectState.setCurrentValue(todo.state);
    this._actionForm.renameButton("update");

    this._actionForm.button.onclick = (e) => {
      e.preventDefault();
      // TODO: add a notification here!
      if (this._title.value === "") {
        return
      };
      const task = {
        id: todo.id,
        title: this._title.value,
        description: this._description.value,
        state: this._selectState.getValue(),
      };
      updateFunc(task);
    }
  }
}

export default TaskForm;
