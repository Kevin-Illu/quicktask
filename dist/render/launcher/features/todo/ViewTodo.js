import TaskForm from './Form/TaskForm.js';
import TodoList from './TodoList.js';
import { RemoveChild } from '../../../utils/tools.js';
class TodoView {
    constructor(parent, todoService) {
        this.displayUpdateForm = (todo) => {
            RemoveChild(this.containerApp);
            this.form.updateTask(todo, this.updateTodo);
            this.containerApp.appendChild(this.form.form);
        };
        this.addANewTaskForm = (addAction) => {
            RemoveChild(this.containerApp);
            this.form.addNewTask((todo) => {
                addAction(todo);
                this.displayTodoList();
            });
            this.containerApp.appendChild(this.form.form);
        };
        this.deleteTodo = (id) => {
            this.todoService.deleteTodo(id);
            this.displayTodoList();
        };
        this.updateTodo = (todo) => {
            this.todoService.updateTodo(todo);
            this.displayTodoList();
        };
        this.displayTodoList = () => {
            RemoveChild(this.containerApp);
            //TODO: normalize this with a interface
            const handlers = {
                displayUpdateForm: this.displayUpdateForm,
                addNewTaskForm: this.addANewTaskForm,
                updateAction: this.updateTodo,
                deleteAction: this.deleteTodo,
                addAction: this.todoService.addNewTodo,
            };
            const todoList = new TodoList(this.todoService.getTodos(), handlers);
            this.containerApp.appendChild(todoList.list);
        };
        this.parent = parent;
        this.containerApp = this.parent.querySelector('.app');
        this.form = new TaskForm();
        this.todoService = todoService;
    }
}
export default TodoView;
