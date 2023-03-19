class TodoApp {
    constructor() {
        this._commit = () => {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        };
        this.getLenghtTodos = () => {
            return this.todos.length;
        };
        this.getTodos = () => {
            return this.todos;
        };
        this.addTodo = ({ title, description, state }) => {
            const todo = {
                id: Date.now(),
                title,
                description,
                state,
            };
            this.todos.push(todo);
            this._commit();
        };
        this.updateTodo = ({ id, title, description, state }) => {
            this.todos = this.todos.map((todo) => todo.id === id
                ? {
                    id: todo.id,
                    title,
                    description,
                    state,
                }
                : todo);
            this._commit();
        };
        this.deleteTodo = (id) => {
            this.todos = this.todos.filter((todo) => todo.id !== id);
            this._commit();
        };
        this.todos = JSON.parse(localStorage.getItem('todos') || '[]') || [];
    }
}
export default TodoApp;
