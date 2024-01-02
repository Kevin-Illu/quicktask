/* eslint-disable  no-unused-vars */
import Button from '../../../components/Button.js';
import { addStyles } from '../../../utils/tools.js';
class TodoItem {
    constructor(todo, { displayForm, update, remove }) {
        this.createItem = (todo, 
        // eslint-disable-next-line no-unused-vars
        deleteTodo) => {
            const item = document.createElement('div');
            item.tabIndex = 0;
            addStyles(item, ['todo-item']);
            const container = document.createElement('div');
            addStyles(container, ['todo-item__container']);
            const state = document.createElement('div');
            state.innerHTML = `<p>${todo.state}</p>`;
            addStyles(state, ['todo-item__state', todo.state]);
            const title = document.createElement('p');
            addStyles(title, ['todo-item__title']);
            // set values to title and state
            title.innerText = todo.title;
            const containerButtons = document.createElement('div');
            addStyles(containerButtons, ['todo-item__containerButtons']);
            const DSettings = {
                iconPath: './public/assets/delete.svg',
                action: () => deleteTodo(this.todo.id),
                styles: ['btn', 'btn-remove'],
            };
            const btnDelete = new Button(DSettings);
            container.appendChild(state);
            container.appendChild(title);
            container.onclick = () => this.displayForm(this.todo, this.updateTodo);
            item.appendChild(container);
            containerButtons.appendChild(btnDelete.button);
            item.appendChild(containerButtons);
            return item;
        };
        this.todo = todo;
        this.displayForm = displayForm;
        this.deleteTodo = remove;
        this.updateTodo = update;
        this.item = this.createItem(todo, this.deleteTodo);
    }
}
export default TodoItem;
