import TodoApp from './features/todo/TodoApp.js';
import TodoService from './features/todo/TodoService.js';
import TodoView from './features/todo/ViewTodo.js';
import LauncherView from './LauncherView.js';
import ContainerApp from './layout/container.js';
import MainNavigationBar from './layout/appbar/appbar.js';
import { btnClose, btnMaximize, btnMinimize, } from './layout/appbar/appbarButtons.js';
import Button from '../components/Button.js';
import NavBar from './layout/navbar.js';
export default class Launcher {
    constructor(parent) {
        this.run = () => {
            this.todoView.displayTodoList();
            this.view.render(this.parent);
        };
        this.parent = parent;
        this.container = new ContainerApp();
        this.navbar = new NavBar(); // navbar apps
        this.navigate = new MainNavigationBar(['navigation'], [btnMinimize, btnMaximize, btnClose]);
        this.todoApp = new TodoApp();
        this.todoService = new TodoService(this.todoApp);
        this.todoView = new TodoView(this.container.container, this.todoService);
        this.view = new LauncherView({
            container: this.container,
            navigate: this.navigate,
        });
        const btnTodoSettings = {
            iconPath: './public/assets/checklist.svg',
            text: 'task',
            action: this.todoView.displayTodoList,
            styles: ['navbar-btn', 'navbar-btn__display-todos', 'btn'],
        };
        const btnDisplayTodo = new Button(btnTodoSettings).button;
        const apps = [btnDisplayTodo];
        this.navbar.addApplications(apps);
        this.container.containerNavBar.appendChild(this.navbar.NavBarContent);
        this.parent.appendChild(this.container.container);
    }
}
