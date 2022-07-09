import Button from "../../../GlobalComponents/Button.js";
import { TodoItem } from "./TodoItem.js";
export const TodoList = (todos, handlers) => {
    const [goToAddForm, goToUpdateForm, remove, edit] = handlers;
    const list = document.createElement('div');
    list.className = 'todo-list';
    list.setAttribute('id', 'todo-list');
    const addTaskSettings = {
        icon: './public/assets/add.svg',
        text: null,
        func: () => goToAddForm(),
        styles: ["btn", "btn-addTask"],
    };
    const btnAddTask = new Button(addTaskSettings);
    if (todos.length === 0) {
        const p = document.createElement('p');
        p.textContent = 'Nothing to do! Add a task?';
        list.append(p);
    }
    else {
        todos.forEach(todo => {
            const item = TodoItem(todo, [goToUpdateForm, remove, edit]);
            list.appendChild(item);
        });
    }
    list.appendChild(btnAddTask.button);
    return list;
};
