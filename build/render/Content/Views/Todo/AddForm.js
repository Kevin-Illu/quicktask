import Button from "../../../components/Button.js";
export const TodoForm = (params) => {
    const { action, todoFunc, todo } = params;
    // we have three types: add | update | view
    const form = document.createElement('form');
    form.setAttribute('id', 'todo-form');
    const todoTitleAndStateContainer = document.createElement('div');
    todoTitleAndStateContainer.classList.add('title-state--container');
    const todoTitleInput = document.createElement('input');
    todoTitleInput.type = 'text';
    todoTitleInput.setAttribute('id', 'todo-title');
    const todoStateSelect = document.createElement('select');
    todoStateSelect.setAttribute('id', 'todo-state');
    const options = ["add state", "open", "work", "on hold"];
    if (action == "update")
        options.push("done");
    options.forEach(option => {
        const optionTag = document.createElement('option');
        optionTag.value = option;
        optionTag.innerText = option;
        if (todo && option === todo.state)
            optionTag.setAttribute('selected', 'selected');
        todoStateSelect.appendChild(optionTag);
    });
    const getOption = (where) => {
        let option = todoStateSelect.options[todoStateSelect.selectedIndex];
        if (where === "handler")
            return option.value === 'add state' ? 'open' : option.value;
    };
    const todoDescriptionInput = document.createElement('textarea');
    // in this case is update;
    if (todo) {
        todoTitleInput.value = todo.title;
        todoDescriptionInput.value = todo.description;
    }
    ;
    todoTitleInput.placeholder = 'Add a nwe task to your project';
    todoDescriptionInput.placeholder = 'Do you want to add a description :v7';
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
                state: getOption("handler")
            };
            // add new todo
            todoFunc(task);
        }
        else if (action === 'update' && todo) {
            task = {
                id: todo.id,
                title: todoTitleInput.value,
                description: todoDescriptionInput.value,
                state: getOption("handler")
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
    todoTitleAndStateContainer.appendChild(todoStateSelect);
    todoStateSelect.onchange = () => getOption();
    form.appendChild(todoTitleAndStateContainer);
    form.appendChild(todoDescriptionInput);
    form.appendChild(btnAdd.button);
    return form;
};
