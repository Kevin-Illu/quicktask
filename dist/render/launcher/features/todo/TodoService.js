class TodoService {
    constructor(app) {
        this.addNewTodo = (todo) => {
            this.todo.addTodo(todo);
        };
        this.getTodos = () => {
            return this.todo.getTodos();
        };
        this.updateTodo = (todo) => {
            this.todo.updateTodo(todo);
        };
        this.deleteTodo = (id) => {
            this.todo.deleteTodo(id);
        };
        this.getNumberOfTodos = () => {
            return this.todo.getLenghtTodos();
        };
        this.todo = app;
    }
}
export default TodoService;
