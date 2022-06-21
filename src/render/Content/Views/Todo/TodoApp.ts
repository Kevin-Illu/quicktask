import { todoFormAction, Todo } from '../../../types/index';
import { RemoveChild } from '../../../utils/RemoveChild.js';
import { TodoForm } from './AddForm.js'
import { TodoList } from './TodoList.js'


class TodoApp {
    private todos: Todo[];
    private parent: HTMLElement | null;

    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos') || "[]") || [];
        this.parent = null;
    }

    _commit = () => {
        localStorage.setItem('todos', JSON.stringify(this.todos));
        this.displayTodos();
    }

    setParent (parentElement: HTMLDivElement) {
        this.parent = parentElement;
    }

    displayAddForm = (action: todoFormAction, func: VoidFunction, todo = null) => {
        if(!this.parent) return;
        RemoveChild(this.parent);
        const form = TodoForm(action, func, todo);
        this.parent.appendChild(form);
    }
    
    // CRUD
    displayTodos = () => {
        if(!this.parent) return;
        RemoveChild(this.parent);
        const handlers = [
            this.displayAddForm,
            this.deleteTodo,
            this.editTodo,
            this.addTodo
        ];
        const todoList = TodoList(this.todos, handlers);
        this.parent.appendChild(todoList);
    }

    addTodo = ({title, description, state}: Todo) => {
        const todo = {
            id: this.todos.length > 0 ?
                this.todos[this.todos.length - 1].id + 1
                : 1,
            title,
            description,
            state
        }

        this.todos.push(todo);
        this._commit();
    }

    editTodo = ({id, title, description, state}: Todo) => {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? {
                id: todo.id,
                title,
                description,
                state,
            } : todo)
        this._commit();
    }

    deleteTodo = (id: number) => {
        this.todos = this.todos.filter(todo => todo.id !== id)
        this._commit();
    }
}

export default TodoApp;
