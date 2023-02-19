import DependencyContainer from './config/dependencyConfig/DependencyContainer.js'
import Todo from './features/todo/Todo.js'
import Launcher from './launcher/Launcher.js'

try {
  // get a root of the aplication
  const root = document.querySelector('#root') as HTMLElement
  // create a dependencies management :D
  const container = new DependencyContainer()
  // se registran las dependencias del DependencyContainer.
  container.register('Todo', new Todo())

  // inicializing the app with all dependencies loaded >w<
  const launcher = new Launcher(container)

  root.appendChild(launcher.element)

  launcher.run()
} catch (error) {
  console.error('An error occurred:', error)
}
