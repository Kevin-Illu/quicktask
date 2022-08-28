import Button from "../../../GlobalComponents/Button.js";
import { btnSettings, Todo, todoState } from "../../../types/index.js";
import { addStyles } from "../../../utils/add-styles.js";


class TodoItem {
  public item: HTMLDivElement;
  private container: HTMLDivElement;
  private state: HTMLDivElement;
  private title: HTMLDivElement;

  private containerButtons: HTMLDivElement;
  private btnEdit: Button;
  private btnDelete: Button;

  constructor(todo: Todo, [editForm, remove, edit]: any) {
    this.item = document.createElement("div");
    addStyles(this.item, ["todo-item"])
    this.container = document.createElement("div");
    addStyles(this.container, ["todo-item__container"])
    this.state = document.createElement("div");
    addStyles(this.state, ["todo-item__state"])
    this.title = document.createElement("p")
    addStyles(this.title, ["todo-item__title"])

    // set values to title and state
    this.setStateColor(todo.state);
    this.title.innerText = todo.title;

    this.containerButtons = document.createElement("div");
    addStyles(this.containerButtons, ["todo-item__containerButtons"])
    const DSettings: btnSettings = {
      icon: './public/assets/delete.svg',
      text: null,
      func: () => remove(todo.id),
      styles: ['btn', 'btn-remove']
    }
    this.btnDelete = new Button(DSettings)

    const ESettings: btnSettings = {
      icon: './public/assets/edit.svg',
      text: null,
      func: () => editForm(todo, edit),
      styles: ['btn', 'btn-edit']
    }
    this.btnEdit = new Button(ESettings)

    this.container.appendChild(this.state)
    this.container.appendChild(this.title)
    this.item.appendChild(this.container)

    this.containerButtons.appendChild(this.btnDelete.button);
    this.containerButtons.appendChild(this.btnEdit.button);
    this.item.appendChild(this.containerButtons);
  }


  private setStateColor = (state: todoState): void => {
    if (state == "on hold") state = "on-hold";
    addStyles(this.state, [state])
  }
}

export default TodoItem
