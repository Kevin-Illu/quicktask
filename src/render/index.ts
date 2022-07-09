import NavBar from './Content/Views/NavBar/NavBar.js';
import Button from './GlobalComponents/Button.js';

import ContainerApp from './Content/Layout/ContainerApp.js';
import MainNavigation from './MainNavigation/Main-navigation-bar.js';
import { btnClose, btnMinimize, btnMaximize } from './MainNavigation/traffic-lights.js';
import TodoApp from './Content/Views/Todo/TodoApp.js'

// // window topBar
const navigation = new MainNavigation(["navigation"],[btnMinimize, btnMaximize, btnClose]);
const Container = new ContainerApp();
// // apps
const Todo = new TodoApp(Container.containerApp);

const btnTodoSettings = {
	icon: './public/assets/checklist.svg',
	text: 'Task',
	func: Todo.displayTodos,
	styles: ['navbar-btn', 'navbar-btn__display-todos', 'btn'],
}
const btnDisplayTodos = new Button(btnTodoSettings);

// navbar apps
const navBar = new NavBar();
const apps = [btnDisplayTodos.button]
navBar.addApplications(apps);
// add navbar at the container app

document.addEventListener('DOMContentLoaded', () => {
	const root: HTMLElement | null = document.getElementById("root");
	if (!root) return;
	root.appendChild(navigation.navigationBar);
	Container.containerNavBar.appendChild(navBar.NavBarContent);
	navigation.setTitle("TodoApp");
	root.appendChild(Container.container);
	Todo.displayTodos();
})