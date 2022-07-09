import Button from "../../../../GlobalComponents/Button.js";
import Select from "../../../../GlobalComponents/Select.js";
export const TodoForm = (params) => {
    const { action, todoFunc, todo } = params;
    const form = document.createElement('form');
    form.setAttribute('id', 'todo-form');
    const todoTitleAndStateContainer = document.createElement('div');
    todoTitleAndStateContainer.classList.add('title-state--container');
    const todoTitleInput = document.createElement('input');
    todoTitleInput.type = 'text';
    todoTitleInput.setAttribute('id', 'todo-title');
    todoTitleInput.placeholder = 'Add a nwe task to your project';
    const todoDescriptionInput = document.createElement('textarea');
    todoDescriptionInput.placeholder = 'Do you want to add a description :v7';
    const todoSelect = new Select();
    const options = ["add state", "open", "work", "on hold"];
    if (action == "update")
        options.push("done");
    todoSelect.setOptions(options);
    if (todo) {
        todoTitleInput.value = todo.title;
        todoDescriptionInput.value = todo.description;
        todoSelect.setDefaultValue(todo.state);
    }
    ;
    // cuando se oprime el botton submit
    const handlerEvent = (e) => {
        e.preventDefault();
        let task;
        // TODO: add a notification      !!Here!! xd
        if (todoTitleInput.value === '')
            return;
        if (action === 'add') {
            task = {
                title: todoTitleInput.value,
                description: todoDescriptionInput.value,
                state: todoSelect.getOption()
            };
            // add new todo
            todoFunc(task);
        }
        else if (action === 'update' && todo) {
            task = {
                id: todo.id,
                title: todoTitleInput.value,
                description: todoDescriptionInput.value,
                state: todoSelect.getOption()
            };
            // update old todo
            todoFunc(task);
        }
    };
    const btnAddSettings = {
        icon: null,
        text: action,
        func: handlerEvent,
        styles: ['btn', 'btn-form']
    };
    const btnAdd = new Button(btnAddSettings);
    btnAdd.button.type = 'submit';
    todoTitleAndStateContainer.appendChild(todoTitleInput);
    todoTitleAndStateContainer.appendChild(todoSelect.select);
    form.appendChild(todoTitleAndStateContainer);
    form.appendChild(todoDescriptionInput);
    form.appendChild(btnAdd.button);
    return form;
};
