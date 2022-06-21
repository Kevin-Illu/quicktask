import { RemoveChild } from '../../../utils/RemoveChild.js';
import { TodoForm } from './AddForm.js';
import { TodoList } from './TodoList.js';
class TodoApp {
    constructor() {
        this._commit = () => {
            localStorage.setItem('todos', JSON.stringify(this.todos));
            this.displayTodos();
        };
        this.displayAddForm = (action, func, todo = null) => {
            if (!this.parent)
                return;
            RemoveChild(this.parent);
            const form = TodoForm(action, func, todo);
            this.parent.appendChild(form);
        };
        // CRUD
        this.displayTodos = () => {
            if (!this.parent)
                return;
            RemoveChild(this.parent);
            const handlers = [
                this.displayAddForm,
                this.deleteTodo,
                this.editTodo,
                this.addTodo
            ];
            const todoList = TodoList(this.todos, handlers);
            this.parent.appendChild(todoList);
        };
        this.addTodo = ({ title, description, state }) => {
            const todo = {
                id: this.todos.length > 0 ?
                    this.todos[this.todos.length - 1].id + 1
                    : 1,
                title,
                description,
                state
            };
            this.todos.push(todo);
            this._commit();
        };
        this.editTodo = ({ id, title, description, state }) => {
            this.todos = this.todos.map((todo) => todo.id === id ? {
                id: todo.id,
                title,
                description,
                state,
            } : todo);
            this._commit();
        };
        this.deleteTodo = (id) => {
            this.todos = this.todos.filter(todo => todo.id !== id);
            this._commit();
        };
        this.todos = JSON.parse(localStorage.getItem('todos') || "[]") || [];
        this.parent = null;
    }
    setParent(parentElement) {
        this.parent = parentElement;
    }
}
export default TodoApp;
