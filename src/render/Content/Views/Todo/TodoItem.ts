import Button from "../../../components/Button.js";
import { btnSettings, Todo, todoFormAction } from "../../../types/index.js";

export const TodoItem = (todo: Todo, funcArr: any) => {
    const [goToForm, remove, update] = funcArr;

    const item = document.createElement('div');
    item.classList.add('todo-item');

    const p = document.createElement('p');
    p.innerText = `${todo.state} ${todo.title}`;
    item.appendChild(p);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    const btnRemoveSettings: btnSettings = {
        icon: './public/assets/delete.svg',
        text: null,
        func: () => remove(todo.id),
        styles: ['btn', 'btn-remove']
    }

    const btnEditSettings: btnSettings = {
        icon: './public/assets/edit.svg',
        text: null,
        func: () => goToForm({ action: "update", todoFunc: update, todo }),
        styles: ['btn', 'btn-edit']
    }

    const btnRemove = new Button(btnRemoveSettings);
    btnContainer.appendChild(btnRemove.button);

    const btnEdit = new Button(btnEditSettings);
    btnContainer.appendChild(btnEdit.button);

    item.appendChild(btnContainer);

    return item;
}