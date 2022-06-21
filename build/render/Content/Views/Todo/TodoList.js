import Button from "../../../components/Button.js";
import { TodoItem } from "./TodoItem.js";
export const TodoList = (todos, handlers) => {
    const [goToAddForm, remove, edit, add] = handlers;
    const list = document.createElement('div');
    list.className = 'todo-list';
    list.setAttribute('id', 'todo-list');
    const addTaskSettings = {
        icon: './public/assets/add.svg',
        text: null,
        func: () => {
            goToAddForm({ action: "add", todoFunc: add, todo: null });
        },
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
            const item = TodoItem(todo, [goToAddForm, remove, edit]);
            list.appendChild(item);
        });
    }
    list.appendChild(btnAddTask.button);
    return list;
};
