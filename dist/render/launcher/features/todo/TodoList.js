import Button from '../../../components/Button.js';
import { addStyles } from '../../../utils/tools.js';
import InitialScreen from './InitialScreen.js';
import TodoItem from './TodoItem.js';
class TodoList {
    constructor(todos, handlers) {
        this.addTodoItems = (todos) => {
            if (todos.length == 0)
                return;
            todos.forEach((todo) => {
                const props = {
                    displayForm: this.displayUpdateForm,
                    update: this.updateItem,
                    remove: this.removeItem,
                };
                const { item } = new TodoItem(todo, props);
                this.list.appendChild(item);
            });
        };
        this.list = document.createElement('div');
        addStyles(this.list, ['todo-list']);
        // handlers
        const { displayUpdateForm, addNewTaskForm, updateAction, deleteAction, addAction, } = handlers;
        this.displayUpdateForm = displayUpdateForm;
        this.removeItem = deleteAction;
        this.updateItem = updateAction;
        this.addTodoItems(todos);
        this.addNewTask = addNewTaskForm;
        this.add = addAction;
        const addTaskSettings = {
            iconPath: './public/assets/add.svg',
            action: () => this.addNewTask(this.add),
            styles: ['btn', 'btn-addTask'],
        };
        this.addNewTodoBtn = new Button(addTaskSettings);
        this.initialScreen = new InitialScreen();
        if (todos.length == 0)
            this.list.appendChild(this.initialScreen.page);
        this.list.appendChild(this.addNewTodoBtn.button);
    }
}
export default TodoList;
