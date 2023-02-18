import DependencyContainer from './launcher/DependencyContainer.js'
import Todo from './launcher/features/Todo.js'
import Launcher from './launcher/Launcher.js'

const container = new DependencyContainer()
// se registran las dependencias del DependencyContainer.
container.register('Todo', new Todo())

// se inicializa la aplicacion con las dependencias cargadas.
const launcher = new Launcher(container)
launcher.run()
