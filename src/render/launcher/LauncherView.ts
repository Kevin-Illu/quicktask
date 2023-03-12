import MainNavigationBar from './layout/appbar/appbar'
import ContainerApp from './layout/container'

interface Props {
  container: ContainerApp
  navigate: MainNavigationBar
}

class LauncherView {
  private container: ContainerApp
  private navigate: MainNavigationBar

  constructor({ container, navigate }: Props) {
    this.container = container
    this.navigate = navigate
  }

  public render = (parent: HTMLElement): void => {
    parent.appendChild(this.navigate.navigationBar)
    parent.appendChild(this.container.container)

    this.navigate.setTitle('QuickTask')
  }
}

export default LauncherView
