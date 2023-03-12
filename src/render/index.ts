import Button from './components/Button.js'
import { IbtnSettings } from './interfaces/components.js'
import TodoApp from './launcher/features/todo/TodoApp.js'
import MainNavigationBar from './launcher/layout/appbar/appbar.js'
import {
  btnClose,
  btnMaximize,
  btnMinimize,
} from './launcher/layout/appbar/appbarButtons.js'
import ContainerApp from './launcher/layout/container.js'
import NavBar from './launcher/layout/navbar.js'

// window topBar
const Container = new ContainerApp()
const navigate = new MainNavigationBar(
  ['navigation'],
  [btnMinimize, btnMaximize, btnClose]
)
const Todo = new TodoApp(Container.containerApp) // apps

const btnTodoSettings: IbtnSettings = {
  iconPath: './public/assets/checklist.svg',
  text: 'Task',
  action: Todo.displayTodos,
  styles: ['navbar-btn', 'navbar-btn__display-todos', 'btn'],
}

const btnDisplayTodo = new Button(btnTodoSettings).button
const Navbar = new NavBar() // navbar apps
const apps = [btnDisplayTodo]
Navbar.addApplications(apps)

const root = document.getElementById('root') as HTMLDivElement
root.appendChild(navigate.navigationBar)

// add navbar at the container app
Container.containerNavBar.appendChild(Navbar.NavBarContent)
navigate.setTitle('TodoApp')

root.appendChild(Container.container)
Todo.displayAddForm()
// Todo.displayTodos()
