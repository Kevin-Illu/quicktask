import DependencyContainer from './config/dependencyConfig/DependencyContainer.js'
import Todo from './features/todo/Todo.js'
import Launcher from './launcher/Launcher.js'
import ViewLauncher from './pages/launcher/ViewLauncher.js'

// TODO: implement the obserber patter for update the view
// when something changes

// INFO: keep learn more to continue the project UnU

try {
  // get a root of the aplication
  const root = document.querySelector('#root') as HTMLElement
  // create a dependencies management :D
  const container = new DependencyContainer()
  // se registran las dependencias del DependencyContainer.
  container.register('Todo', new Todo())

  // inicializing the app with all dependencies loaded >w<
  const launcher = new Launcher(container, new ViewLauncher('QuickTask'))

  root.appendChild(launcher.ViewContainer.view)

  launcher.run()
} catch (error) {
  console.error('An error occurred:', error)
}
